# Email Setup Guide for ResearchPro

This guide will help you set up email functionality using Resend.

## Step 1: Create Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Click "Start Building" or "Sign Up"
3. Sign up with your email or GitHub account
4. Verify your email address

## Step 2: Get Your API Key

1. Once logged in, go to **API Keys** in the sidebar
2. Click "Create API Key"
3. Give it a name (e.g., "ResearchPro Production")
4. Select permissions: **Full access** (or "Sending access" minimum)
5. Click "Create"
6. **Copy the API key** - you won't be able to see it again!
   - It will look like: `re_123abc456def789ghi`

## Step 3: Add Domain (Optional but Recommended)

### Option A: Use Resend's Test Domain (Quick Start)
- For testing, you can use: `onboarding@resend.dev`
- This works immediately but has limitations
- Only sends to verified email addresses

### Option B: Add Your Own Domain (Production)
1. Go to **Domains** in Resend dashboard
2. Click "Add Domain"
3. Enter your domain (e.g., `researchpro.com`)
4. Add the DNS records shown to your domain provider:
   - SPF record
   - DKIM record
   - DMARC record
5. Wait for verification (usually a few minutes)
6. Use emails like: `noreply@researchpro.com`

## Step 4: Configure Environment Variables

### For Local Development:

1. Create a `.env` file in your project root:
   ```bash
   cp .env.example .env
   ```

2. Add your Resend credentials:
   ```env
   RESEND_API_KEY=re_your_actual_api_key_here
   RESEND_FROM_EMAIL=onboarding@resend.dev
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

### For Vercel Production:

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add these 3 variables:

   **Variable 1:**
   - Name: `RESEND_API_KEY`
   - Value: `re_your_actual_api_key_here`
   - Environment: Production, Preview, Development

   **Variable 2:**
   - Name: `RESEND_FROM_EMAIL`
   - Value: `onboarding@resend.dev` (or your domain email)
   - Environment: Production, Preview, Development

   **Variable 3:**
   - Name: `NEXT_PUBLIC_APP_URL`
   - Value: `https://your-app.vercel.app` (your actual Vercel URL)
   - Environment: Production, Preview, Development

4. Click **Save** for each variable

## Step 5: Redeploy

After adding environment variables to Vercel:
1. Go to **Deployments**
2. Click the **"..."** menu on the latest deployment
3. Click **"Redeploy"**

Or push a new commit to trigger automatic deployment.

## Step 6: Test Email Sending

### Test Locally:
```bash
npm run dev
```

1. Register a new account
2. Login to dashboard
3. Click "Verify Email & Claim $200"
4. Check your email inbox!

### Test on Production:
1. Visit your Vercel URL
2. Register with your real email
3. Check your inbox for verification email

## Resend Free Tier Limits

✅ **3,000 emails per month**
✅ **100 emails per day**
✅ **Unlimited domains**
✅ **Email logs and analytics**

Perfect for your pentesting site!

## Troubleshooting

### Email Not Received?

1. **Check spam folder**
2. **Verify API key** is correct in environment variables
3. **Check Resend logs**:
   - Go to Resend dashboard → **Logs**
   - See if email was sent and any errors
4. **If using test domain** (`onboarding@resend.dev`):
   - Add your email to verified addresses in Resend
   - Go to **Settings** → **Verified Emails**

### "Failed to send email" error?

- Check that `RESEND_API_KEY` is set in environment variables
- Verify the API key is valid (not revoked)
- Check Resend dashboard for any issues

### Verification link not working?

- Make sure `NEXT_PUBLIC_APP_URL` is set correctly
- For Vercel: use your actual deployment URL
- For local: use `http://localhost:3000`

## Email Templates

The system sends two emails:

1. **Verification Email** - When user clicks "Send Verification"
   - Subject: "🎉 Verify Your Email & Claim $200 - ResearchPro"
   - Contains: Verification button, $200 bonus info, benefits list

2. **Welcome Email** - After successful verification
   - Subject: "✅ Welcome to ResearchPro - Email Verified!"
   - Contains: Success message, $200 confirmation, dashboard link

## Security Notes

- ✅ Verification tokens expire in 24 hours
- ✅ Tokens are JWT-based and cryptographically signed
- ✅ Email addresses are validated before sending
- ✅ Users can only verify their own email
- ✅ Duplicate verifications are prevented

## Support

- **Resend Documentation**: https://resend.com/docs
- **Resend Status**: https://status.resend.com
- **Get Help**: https://resend.com/support

Your email system is now ready! 🎉
