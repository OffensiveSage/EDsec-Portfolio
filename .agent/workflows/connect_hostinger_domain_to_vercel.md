---
description: How to connect a Hostinger domain to a Vercel deployment
---

# Connect Hostinger Domain to Vercel

Follow these steps to point your Hostinger domain to your Vercel project.

## 1. Configure Vercel
1.  Go to your **Vercel Dashboard** and select your project.
2.  Navigate to **Settings** > **Domains**.
3.  Enter your domain name (e.g., `edsec.com`) in the input field and click **Add**.
4.  Vercel will provide you with the required DNS records. usually:
    *   **Type:** `A`
    *   **Value:** `76.76.21.21`
    *   **OR** (for subdomains like `www`) **Type:** `CNAME`, **Value:** `cname.vercel-dns.com`

## 2. Configure Hostinger
1.  Log in to your **Hostinger hPanel**.
2.  Go to **Domains** and select your domain.
3.  Click on **DNS / Nameservers**.
4.  **Delete** any existing `A` records that point to Hostinger (Parked) or other IPs to avoid conflicts.
5.  **Add the Vercel Records**:
    *   **Record Type:** `A`
    *   **Name:** `@` (or leave blank)
    *   **Points to:** `76.76.21.21`
    *   **TTL:** Default (e.g., 3600 or 14400)
6.  **Add the CNAME Record (for www)**:
    *   **Record Type:** `CNAME`
    *   **Name:** `www`
    *   **Target:** `cname.vercel-dns.com`
    *   **TTL:** Default

## 3. Verification
1.  Go back to the **Vercel Domains** page.
2.  It may take a few minutes (up to 24 hours, but usually fast) for the changes to propagate.
3.  Once verified, Vercel will automatically generate an SSL certificate for HTTPS.

> [!NOTE]
> If you see an "Invalid Configuration" error on Vercel, wait a few minutes and refresh. DNS propagation takes time.
