#!/usr/bin/env python3
"""
Email inbox monitor for Web Vanguard
Fetches unseen emails, categorizes them, and routes accordingly
"""

import imaplib
import email
from email.header import decode_header
import json
import os
import sys
from datetime import datetime
import re

# Colors for terminal output
GREEN = '\033[92m'
YELLOW = '\033[93m'
RED = '\033[91m'
CYAN = '\033[96m'
RESET = '\033[0m'

# Load credentials
config_path = "/home/javibeat/.openclaw/workspace/.email-config"
config = {}
with open(config_path, 'r') as f:
    for line in f:
        line = line.strip()
        if line and '=' in line and not line.startswith('#'):
            key, value = line.split('=', 1)
            config[key] = value

IMAP_SERVER = config['ZOHO_IMAP_SERVER']
IMAP_PORT = int(config['ZOHO_IMAP_PORT'])
LOGIN_EMAIL = config['ZOHO_LOGIN']
APP_PASSWORD = config['ZOHO_APP_PASSWORD']

def decode_email_header(header_text):
    """Decode email header text"""
    if not header_text:
        return ""
    decoded_parts = []
    for part, encoding in decode_header(header_text):
        if isinstance(part, bytes):
            decoded_parts.append(part.decode(encoding or 'utf-8', errors='ignore'))
        else:
            decoded_parts.append(str(part))
    return ''.join(decoded_parts)

def get_email_content(msg):
    """Extract email body text"""
    content = ""
    if msg.is_multipart():
        for part in msg.walk():
            if part.get_content_type() == "text/plain":
                try:
                    content = part.get_payload(decode=True).decode('utf-8', errors='ignore')
                    break
                except:
                    pass
    else:
        try:
            content = msg.get_payload(decode=True).decode('utf-8', errors='ignore')
        except:
            content = msg.get_payload()
    return content[:500]  # First 500 chars for categorization

def categorize_email(sender, subject, content):
    """Categorize email into BeatLabs, Nibango, WebVanguard, or SPAM"""
    
    combined_text = (sender + " " + subject + " " + content).lower()
    
    # BeatLabs patterns
    beatlabs_patterns = [
        r'beatlabs\.ae', r'info@beatlabs\.ae', r'beatlabs',
        r'wio\.io', r'wiobusiness'
    ]
    
    # Nibango patterns
    nibango_patterns = [
        r'nibango\.com', r'noreply@nibango\.com', r'nibango'
    ]
    
    # Check for BeatLabs
    if any(re.search(pattern, combined_text) for pattern in beatlabs_patterns):
        return 'beatlabs'
    
    # Check for Nibango
    if any(re.search(pattern, combined_text) for pattern in nibango_patterns):
        return 'nibango'
    
    # Check for Web Vanguard (client inquiry, proposal, pricing, web design)
    webvanguard_patterns = [
        r'web.?design', r'website', r'proposal', r'quote', r'pricing',
        r'client', r'project', r'inquiry', r'contact', r'service'
    ]
    
    if any(re.search(pattern, combined_text) for pattern in webvanguard_patterns):
        return 'webvanguard'
    
    # Check if it's SPAM/newsletter
    spam_patterns = [
        r'unsubscribe', r'newsletter', r'notification', r'alert',
        r'automated', r'do not reply', r'noreply@'
    ]
    
    if any(re.search(pattern, combined_text) for pattern in spam_patterns):
        return 'spam'
    
    return 'unclear'

def connect_imap():
    """Connect to IMAP server"""
    try:
        mail = imaplib.IMAP4_SSL(IMAP_SERVER, IMAP_PORT)
        mail.login(LOGIN_EMAIL, APP_PASSWORD)
        print(f"{GREEN}✓ Connected to IMAP{RESET}")
        return mail
    except Exception as e:
        print(f"{RED}✗ IMAP connection failed: {e}{RESET}")
        return None

def fetch_unseen_emails(mail):
    """Fetch unseen emails from INBOX"""
    try:
        mail.select('INBOX')
        status, messages = mail.search(None, 'UNSEEN')
        
        if status != 'OK':
            print(f"{RED}✗ Failed to search for unseen emails{RESET}")
            return []
        
        message_ids = messages[0].split()
        if not message_ids:
            print(f"{CYAN}No unseen emails{RESET}")
            return []
        
        print(f"{YELLOW}Found {len(message_ids)} unseen email(s){RESET}")
        
        emails = []
        for msg_id in message_ids:
            status, msg_data = mail.fetch(msg_id, '(RFC822)')
            if status == 'OK':
                msg = email.message_from_bytes(msg_data[0][1])
                emails.append((msg_id, msg))
        
        return emails
    except Exception as e:
        print(f"{RED}✗ Failed to fetch emails: {e}{RESET}")
        return []

def move_to_folder(mail, msg_id, folder_name):
    """Move email to a specific folder"""
    try:
        mail.copy(msg_id, folder_name)
        mail.store(msg_id, '+FLAGS', '\\Deleted')
        print(f"  {GREEN}→ Moved to '{folder_name}'{RESET}")
        return True
    except Exception as e:
        print(f"  {RED}✗ Move failed: {e}{RESET}")
        return False

def delete_email(mail, msg_id):
    """Delete email"""
    try:
        mail.store(msg_id, '+FLAGS', '\\Deleted')
        print(f"  {GREEN}→ Deleted{RESET}")
        return True
    except Exception as e:
        print(f"  {RED}✗ Delete failed: {e}{RESET}")
        return False

def notify_telegram(message, chat_id="7606887925"):
    """Send notification to Telegram"""
    # This will be called via the cron message function
    return message

def process_emails(mail, emails):
    """Process all emails"""
    
    notifications = []
    
    for msg_id, msg in emails:
        sender = decode_email_header(msg.get('From', 'Unknown'))
        subject = decode_email_header(msg.get('Subject', '(no subject)'))
        content = get_email_content(msg)
        
        print(f"\n{CYAN}Email:{RESET}")
        print(f"  From: {sender}")
        print(f"  Subject: {subject}")
        
        category = categorize_email(sender, subject, content)
        print(f"  Category: {YELLOW}{category.upper()}{RESET}")
        
        if category == 'beatlabs':
            move_to_folder(mail, msg_id, 'BeatLabs')
            print(f"  {CYAN}(No Telegram notification — BeatLabs group loop handles it){RESET}")
        
        elif category == 'nibango':
            move_to_folder(mail, msg_id, 'Nibango')
            notification = f"📬 Nibango email from {sender}: {subject}"
            notifications.append(notification)
            print(f"  {CYAN}→ Will notify:{RESET} {notification}")
        
        elif category == 'webvanguard':
            move_to_folder(mail, msg_id, 'WebVanguard')
            summary = content[:100].replace('\n', ' ').strip()
            notification = f"🕸️ Web Vanguard lead from {sender}: {subject} — {summary}"
            notifications.append(notification)
            print(f"  {CYAN}→ Will notify:{RESET} {notification[:80]}...")
        
        elif category == 'spam':
            delete_email(mail, msg_id)
        
        elif category == 'unclear':
            notification = f"❓ Unclear email from {sender}: {subject} — What should I do with this?"
            notifications.append(notification)
            print(f"  {CYAN}→ Will ask:{RESET} {notification[:80]}...")
    
    return notifications

def main():
    print(f"{CYAN}=== Web Vanguard Email Monitor ==={RESET}")
    print(f"Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S UTC')}")
    print(f"Checking: hello@webvanguard.co (login: {LOGIN_EMAIL})\n")
    
    mail = connect_imap()
    if not mail:
        sys.exit(1)
    
    try:
        emails = fetch_unseen_emails(mail)
        if not emails:
            sys.exit(0)
        
        notifications = process_emails(mail, emails)
        
        # Expunge deleted emails
        mail.expunge()
        
        # Output notifications as JSON for cron to send
        if notifications:
            print(f"\n{GREEN}=== NOTIFICATIONS ==={RESET}")
            for notif in notifications:
                print(notif)
            
            # Output for cron processing
            print("\n__NOTIFICATIONS_START__")
            print(json.dumps(notifications))
            print("__NOTIFICATIONS_END__")
    
    finally:
        mail.close()
        mail.logout()
        print(f"\n{GREEN}✓ Done{RESET}")

if __name__ == '__main__':
    main()
