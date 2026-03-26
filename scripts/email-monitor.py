#!/usr/bin/env python3
"""
Email inbox monitor for hello@webvanguard.co
Sorts emails by category (Nibango, Web Vanguard, or spam)
Sends Telegram notifications for important emails
"""

import imaplib
import email
from email.header import decode_header
import sys
import json
from pathlib import Path

# Configuration
IMAP_SERVER = "imappro.zoho.com"
IMAP_PORT = 993
LOGIN_EMAIL = "javibeat@gmail.com"
APP_PASSWORD = "LpSmizTYUmXL"
FROM_EMAIL = "hello@webvanguard.co"

# Categories
NIBANGO_KEYWORDS = ["nibango", "nibango.com", "noreply@nibango.com"]
WEB_VANGUARD_KEYWORDS = ["client", "inquiry", "proposal", "pricing", "web design", "website", "design request"]

def decode_email_subject(subject):
    """Decode email subject safely"""
    try:
        if isinstance(subject, str):
            return subject
        decoded_parts = decode_header(subject)
        result = ""
        for part, encoding in decoded_parts:
            if isinstance(part, bytes):
                result += part.decode(encoding or 'utf-8', errors='ignore')
            else:
                result += str(part)
        return result
    except:
        return str(subject)

def decode_email_address(addr_header):
    """Extract sender email and name"""
    try:
        if isinstance(addr_header, str):
            if '<' in addr_header:
                name = addr_header.split('<')[0].strip()
                email_addr = addr_header.split('<')[1].rstrip('>')
                return email_addr, name
            else:
                return addr_header.strip(), addr_header.strip()
        return str(addr_header), str(addr_header)
    except:
        return str(addr_header), str(addr_header)

def get_email_body(msg):
    """Extract plain text body from email"""
    try:
        if msg.is_multipart():
            for part in msg.walk():
                if part.get_content_type() == "text/plain":
                    payload = part.get_payload(decode=True)
                    if isinstance(payload, bytes):
                        return payload.decode('utf-8', errors='ignore')
                    return str(payload)
        else:
            payload = msg.get_payload(decode=True)
            if isinstance(payload, bytes):
                return payload.decode('utf-8', errors='ignore')
            return str(payload)
    except:
        return ""

def categorize_email(sender, subject, body):
    """
    Categorize email:
    - 'nibango': Nibango-related
    - 'webvanguard': Web Vanguard lead
    - 'spam': Newsletter/automated/unwanted
    - 'unclear': Needs human decision
    """
    content = f"{sender.lower()} {subject.lower()} {body.lower()}"
    
    # Check Nibango
    if any(kw in content for kw in NIBANGO_KEYWORDS):
        return 'nibango'
    
    # Check Web Vanguard
    if any(kw in content for kw in WEB_VANGUARD_KEYWORDS):
        return 'webvanguard'
    
    # Check spam patterns
    spam_patterns = [
        'unsubscribe', 'newsletter', 'marketing', 'promotion',
        'deal', 'offer', 'limited time', 'no-reply', 'noreply',
        'notification', 'alert', 'confirm', 'verify', 'reset'
    ]
    if any(sp in content for sp in spam_patterns):
        return 'spam'
    
    # Default: unclear
    return 'unclear'

def move_email(mail, msg_id, folder_name):
    """Move email to folder"""
    try:
        mail.copy(msg_id, folder_name)
        mail.store(msg_id, '+FLAGS', '\\Deleted')
        mail.expunge()
        return True
    except Exception as e:
        print(f"Error moving email: {e}", file=sys.stderr)
        return False

def connect_imap():
    """Connect to IMAP server"""
    try:
        mail = imaplib.IMAP4_SSL(IMAP_SERVER, IMAP_PORT)
        mail.login(LOGIN_EMAIL, APP_PASSWORD)
        return mail
    except Exception as e:
        print(f"IMAP connection failed: {e}", file=sys.stderr)
        sys.exit(1)

def fetch_unseen_emails(mail):
    """Fetch all unseen emails from INBOX"""
    try:
        mail.select('INBOX')
        status, msg_ids = mail.search(None, 'UNSEEN')
        if status == 'OK':
            return msg_ids[0].split() if msg_ids[0] else []
        return []
    except Exception as e:
        print(f"Error fetching emails: {e}", file=sys.stderr)
        return []

def send_telegram_notification(message):
    """Send notification via Telegram (using message tool)"""
    # This will be called via the message tool from the agent
    return {
        'action': 'send',
        'channel': '@javibeat',  # Direct message
        'message': message
    }

def main():
    # Connect to IMAP
    mail = connect_imap()
    
    # Fetch unseen emails
    unseen_msg_ids = fetch_unseen_emails(mail)
    
    if not unseen_msg_ids:
        print("No new emails.")
        mail.close()
        mail.logout()
        return
    
    # Process each email
    notifications = []
    
    for msg_id in unseen_msg_ids:
        try:
            status, msg_data = mail.fetch(msg_id, '(RFC822)')
            if status != 'OK':
                continue
            
            msg = email.message_from_bytes(msg_data[0][1])
            
            # Extract info
            subject = decode_email_subject(msg.get('Subject', '(No Subject)'))
            sender_raw = msg.get('From', '')
            sender_email, sender_name = decode_email_address(sender_raw)
            body = get_email_body(msg)[:500]  # First 500 chars
            
            # Categorize
            category = categorize_email(sender_email, subject, body)
            
            # Handle by category
            if category == 'nibango':
                move_email(mail, msg_id, 'Nibango')
                notifications.append({
                    'type': 'nibango',
                    'message': f"📬 Nibango email from {sender_name or sender_email}: {subject}"
                })
            
            elif category == 'webvanguard':
                move_email(mail, msg_id, 'WebVanguard')
                summary = body.split('\n')[0][:100] if body else subject
                notifications.append({
                    'type': 'webvanguard',
                    'message': f"🏴 Web Vanguard lead from {sender_name or sender_email}: {subject} — {summary}"
                })
            
            elif category == 'spam':
                move_email(mail, msg_id, '[Gmail]/Trash')
                # Silent delete
                pass
            
            elif category == 'unclear':
                notifications.append({
                    'type': 'unclear',
                    'message': f"❓ Unclear email from {sender_name or sender_email}: {subject}\n\nPlease advise (Nibango/WebVanguard/Delete)"
                })
        
        except Exception as e:
            print(f"Error processing email {msg_id}: {e}", file=sys.stderr)
            continue
    
    # Output notifications as JSON for the calling agent
    if notifications:
        print(json.dumps(notifications))
    else:
        print("[]")
    
    mail.close()
    mail.logout()

if __name__ == '__main__':
    main()
