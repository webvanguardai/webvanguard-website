# SETUP - Data Sources Configuration

## Goal
Enable real-time metrics on `/metrics` by connecting:
- YouTube channel analytics
- Leads Google Sheet

## 1. YouTube Data API v3

### Create a Google Cloud project
1. Go to https://console.cloud.google.com/
2. Create new project (or select existing).
3. Enable “YouTube Data API v3” under APIs & Services → Library.
4. Go to “Credentials” → “Create Credentials” → API key.
5. Copy the API key → set `NEXT_PUBLIC_YOUTUBE_API_KEY` in your environment.

Optional (for private data like watch time):
- Create OAuth 2.0 Client ID (Web application).
- Use the OAuth playground to get a refresh token: https://developers.google.com/oauthplayground/
- Scope: `https://www.googleapis.com/auth/yt-analytics.readonly`
- Copy `YOUTUBE_CLIENT_ID`, `YOUTUBE_CLIENT_SECRET`, and the refresh token.
- Also set `YOUTUBE_CHANNEL_ID` (your channel’s ID, e.g., `UCxxxxxxxx`).

### Set environment variables
In Vercel (or local `.env.local`):
```
NEXT_PUBLIC_YOUTUBE_API_KEY=AIzaSy...
YOUTUBE_CHANNEL_ID=UCxxxxxxxx
# Optional:
YOUTUBE_CLIENT_ID=...
YOUTUBE_CLIENT_SECRET=...
YOUTUBE_REFRESH_TOKEN=...
```

## 2. Google Sheets (Leads)

Create a Google Sheet with columns (at minimum): `Name`, `Email`, `Company`, `Status`, `DateAdded` (or similar).

Make the sheet publicly readable (Share → “Anyone with link” as Viewer) or use a service account. The simple approach is public read.

Get the spreadsheet ID from the URL: `https://docs.google.com/spreadsheets/d/<SPREADSHEET_ID>/edit`

Set environment:
```
NEXT_PUBLIC_LEADS_SHEET_ID=<SPREADSHEET_ID>
NEXT_PUBLIC_LEADS_SHEET_RANGE=Leads!A1:E100  # adjust sheet name/range
```

The `/api/metrics/leads` endpoint will fetch the CSV export and compute totals.

## 3. Deploy and Test
1. Add these variables in Vercel → your project → Settings → Environment Variables (all as plain, not secret, because they’re read server-side; NEXT_PUBLIC_* will be exposed to client).
2. Redeploy.
3. Visit `/metrics` – you should see `Data source: youtube_api / google_sheets`.

## 4. Notes
- Without these variables, the dashboard falls back to mock data.
- For production, consider server-side only access and proxy to protect keys. This MVP uses NEXT_PUBLIC for simplicity (YouTube API key is restricted to your domain anyway).
- For leads, you may want to implement write API later.
