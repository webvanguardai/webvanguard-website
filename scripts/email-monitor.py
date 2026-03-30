#!/usr/bin/env python3
"""
Email inbox monitor for hello@webvanguard.co
Fetches unseen emails and categorizes them according to rules
"""

import imaplib
import email
from email.header import decode_header
import re
import sys
import urllib.request
import json

# Read config
config = {}
with open('/home/javibeat/.openclaw/workspace/.email-config', 'r') as f:
    for line in f:
        line = line.strip()
        if '=' in line and not line.startswith('#'):
            key, value = line.split('=', 1)
            config[key] = value

IMAP_SERVER = config['ZOHO_IMAP_SERVER']
IMAP_PORT = int(config['ZOHO_IMAP_PORT'])
LOGIN = config['ZOHO_LOGIN']
PASSWORD = config['ZOHO_APP_PASSWORD']
EMAIL_ADDRESS = config['ZOHO_FROM']

# Patterns for categorization
BEATLABS_PATTERNS = [r'beatlabs\.ae', r'info@beatlabs\.ae', r'wio\.io', r'WioBusiness', r'BeatLabs']
NIBANGO_PATTERNS = [r'nibango\.com', r'noreply@nibango\.com', r'Nibango']
WEBVANGUARD_PATTERNS = [r'client', r'proposal', r'pricing', r'web design', r'website', r'design']
SPAM_PATTERNS = [
    r'noreply-dmarc-support@google\.com',
    r'dmarc@',
    r'postmaster',
    r'noreply@',
    r'no-reply@',
    r'mailer-daemon',
    r'bounce',
    r'delivery notification',
    r'unsubscribe',
    r'billing',
    r'receipt',
    r'verify',
    r'confirmation',
    r'newsletter',
    r'marketing',
    r'promotional'
]

def decode_header_value(header_value):
    """Decode email header value"""
    if not header_value:
        return ''
    if isinstance(header_value, str):
        return header_value
    decoded = decode_header(header_value)
    result = []
    for text, charset in decoded:
        if isinstance(text, bytes):
            try:
                result.append(text.decode(charset or 'utf-8', errors='ignore'))
            except:
                result.append(text.decode('utf-8', errors='ignore'))
        else:
            result.append(str(text))
    return ''.join(result)

def get_email_body(msg):
    """Extract email body"""
    body = ''
    if msg.is_multipart():
        for part in msg.walk():
            if part.get_content_type() == 'text/plain':
                try:
                    payload = part.get_payload(decode=True)
                    body = payload.decode('utf-8', errors='ignore')
                    break
                except:
                    pass
    else:
        try:
            payload = msg.get_payload(decode=True)
            body = payload.decode('utf-8', errors='ignore')
        except:
            pass
    return body.lower()

def categorize_email(sender, subject, body):
    """Categorize email and return category and folder"""
    full_text = (sender + ' ' + subject + ' ' + body).lower()
    
    # Check for spam/automated
    for pattern in SPAM_PATTERNS:
        if re.search(pattern, full_text, re.IGNORECASE):
            return 'SPAM', None  # Will be deleted
    
    # Check for BeatLabs
    for pattern in BEATLABS_PATTERNS:
        if re.search(pattern, full_text, re.IGNORECASE):
            return 'BEATLABS', 'BeatLabs'
    
    # Check for Nibango
    for pattern in NIBANGO_PATTERNS:
        if re.search(pattern, full_text, re.IGNORECASE):
            return 'NIBANGO', 'Nibango'
    
    # Check for Web Vanguard
    for pattern in WEBVANGUARD_PATTERNS:
        if re.search(pattern, full_text, re.IGNORECASE):
            return 'WEBVANGUARD', 'WebVanguard'
    
    # Default: unclear
    return 'UNCLEAR', 'Spam'

def send_telegram_notification(chat_id, message):
    """Send Telegram notification via POST"""
    try:
        # Using the message tool via webhook-style approach
        # In this case, we'll just print and let the calling code handle it
        return message
    except Exception as e:
        print(f"Error sending Telegram: {e}", file=sys.stderr)
        return None

def main():
    try:
        # Connect to IMAP
        print(f"Connecting to {IMAP_SERVER}:{IMAP_PORT}...")
        imap = imaplib.IMAP4_SSL(IMAP_SERVER, IMAP_PORT)
        imap.login(LOGIN, PASSWORD)
        print("Connected and authenticated.")
        
        # Select INBOX
        imap.select('INBOX')
        
        # Search for unseen emails
        _, message_ids = imap.search(None, 'UNSEEN')
        
        if not message_ids[0]:
            print("No unseen emails.")
            return
        
        email_ids = message_ids[0].split()
        print(f"Found {len(email_ids)} unseen email(s).")
        
        notifications = []
        
        for email_id in email_ids:
            _, msg_data = imap.fetch(email_id, '(RFC822)')
            msg = email.message_from_bytes(msg_data[0][1])
            
            sender = decode_header_value(msg.get('From', ''))
            subject = decode_header_value(msg.get('Subject', ''))
            body = get_email_body(msg)
            
            print(f"\n--- Email: {subject} ---")
            print(f"From: {sender}")
            
            category, folder = categorize_email(sender, subject, body)
            
            if category == 'SPAM':
                # Delete email
                imap.store(email_id, '+FLAGS', '\\Deleted')
                print(f"Action: DELETED (spam)")
            elif category == 'BEATLABS':
                # Move to BeatLabs folder
                imap.copy(email_id, 'BeatLabs')
                imap.store(email_id, '+FLAGS', '\\Deleted')
                print(f"Action: MOVED to BeatLabs folder (no notification)")
            elif category == 'NIBANGO':
                # Move to Nibango and notify
                imap.copy(email_id, 'Nibango')
                imap.store(email_id, '+FLAGS', '\\Deleted')
                msg_text = f"📬 Nibango email from {sender}: {subject}"
                notifications.append(('nibango', msg_text))
                print(f"Action: MOVED to Nibango folder")
                print(f"Notification: {msg_text}")
            elif category == 'WEBVANGUARD':
                # Move to WebVanguard and notify
                summary = body.split('\n')[0][:80] if body else "No preview"
                imap.copy(email_id, 'WebVanguard')
                imap.store(email_id, '+FLAGS', '\\Deleted')
                msg_text = f"🕸️ Web Vanguard lead from {sender}: {subject} — {summary}"
                notifications.append(('webvanguard', msg_text))
                print(f"Action: MOVED to WebVanguard folder")
                print(f"Notification: {msg_text}")
            else:  # UNCLEAR
                # Move to Spam folder silently
                imap.copy(email_id, 'Spam')
                imap.store(email_id, '+FLAGS', '\\Deleted')
                print(f"Action: MOVED to Spam folder (unclear)")
        
        # Expunge deleted emails
        imap.expunge()
        imap.close()
        imap.logout()
        
        # Output notifications for external processing
        if notifications:
            print("\n=== NOTIFICATIONS TO SEND ===")
            for category, msg in notifications:
                print(f"{category.upper()}|{msg}")
        
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        import traceback
        traceback.print_exc()
        sys.exit(1)

if __name__ == '__main__':
    main()
