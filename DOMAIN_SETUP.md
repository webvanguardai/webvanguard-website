# Domain Setup - WebVanguard

## Goal
Point your custom domain (e.g., `webvanguard.ai` or `javibeat.com`) to the Vercel project `webvanguard-website`.

## Steps

### 1. Add domain in Vercel
1. Open https://vercel.com/teams/webvanguardai-2631s-projects/projects/webvanguard-website
2. Go to **Settings** → **Domains**.
3. Click **Add Domain**.
4. Type your domain (e.g., `webvanguard.ai` or `www.webvanguard.ai`). Click **Add**.
5. Vercel will show DNS records to configure (usually a CNAME to `cname.vercel-dns.com`, or A records to `76.76.21.21` etc). Copy them.

### 2. Configure DNS at your registrar
Where you bought the domain (GoDaddy, Namecheap, etc.), set the following:

- If using a subdomain like `www`, create a **CNAME** record:
  - Name/Host: `www`
  - Value/Target: `cname.vercel-dns.com` (or the value Vercel provided)
  - TTL: default

- If using the root/apex domain (`webvanguard.ai`), create **A** records:
  - Name/Host: `@` or leave blank
  - Value: `76.76.21.21` (Vercel’s IPs – check latest in Vercel docs)
  - TTL: default

Also add a **CNAME** for `www` pointing to `webvanguard.vercel.app` or Vercel’s DNS target.

### 3. Verify and wait
Propagation takes up to 48h (usually minutes). Use `dig` or https://dnschecker.org to confirm.

Once Vercel shows domain status “Connected”, your site will be live on that domain.

### 4. Force HTTPS
Vercel automatically provisions SSL. Ensure “Redirect to HTTPS” is enabled in project settings.

### Notes
- Vercel may require you to verify domain ownership via email if the domain is external.
- Keep the default `webvanguard-website.vercel.app` as fallback.

---

After setup, update any hardcoded links (e.g., in Calendly prefill, email signatures) to use the custom domain.
