# Supabase Setup Guide for ResearchPro

This guide will help you set up Supabase as your database for the ResearchPro application.

## Step 1: Create a Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up with GitHub (recommended) or email

## Step 2: Create a New Project

1. Click "New Project"
2. Fill in the details:
   - **Name:** ResearchPro (or any name you prefer)
   - **Database Password:** Generate a strong password (save this!)
   - **Region:** Choose the closest region to your users
   - **Pricing Plan:** Free (perfect for getting started)
3. Click "Create new project"
4. Wait 2-3 minutes for the project to be provisioned

## Step 3: Create the Users Table

1. In your Supabase dashboard, click on **"SQL Editor"** in the left sidebar
2. Click **"New query"**
3. Copy and paste this SQL code:

```sql
-- Create users table (simplified - only email and password)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email_verified BOOLEAN DEFAULT TRUE
);

-- Create index on email for faster lookups
CREATE INDEX idx_users_email ON users(email);

-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow insert (registration)
CREATE POLICY "Allow public insert" ON users
  FOR INSERT
  WITH CHECK (true);

-- Create a policy to allow users to read their own data
CREATE POLICY "Users can read own data" ON users
  FOR SELECT
  USING (true);

-- Create a policy to allow users to update their own data
CREATE POLICY "Users can update own data" ON users
  FOR UPDATE
  USING (true);
```

4. Click **"Run"** to execute the SQL
5. You should see "Success. No rows returned"

## Step 4: Get Your Supabase Credentials

1. Click on **"Settings"** (gear icon) in the left sidebar
2. Click on **"API"** under Project Settings
3. You'll see two important values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (under "Project API keys")

## Step 5: Configure Your Local Environment

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your Supabase credentials:
   ```env
   JWT_SECRET=your-secure-random-string-here
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

3. Generate a JWT secret:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
   ```

## Step 6: Configure Vercel Environment Variables

1. Go to your Vercel project dashboard
2. Click on **"Settings"**
3. Click on **"Environment Variables"**
4. Add these three variables:
   - **Name:** `JWT_SECRET`
     **Value:** Your generated secret

   - **Name:** `NEXT_PUBLIC_SUPABASE_URL`
     **Value:** Your Supabase project URL

   - **Name:** `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     **Value:** Your Supabase anon key

5. Click **"Save"** for each variable

## Step 7: Deploy

Commit and push your changes:

```bash
git add .
git commit -m "Add Supabase integration for persistent database"
git push
```

Vercel will automatically redeploy with the new database!

## Step 8: Test Your Application

1. Visit your Vercel URL
2. Register a new account
3. Log in
4. Check your Supabase dashboard:
   - Go to **"Table Editor"**
   - Click on **"users"** table
   - You should see your registered user!

## Troubleshooting

### "Supabase URL or Anon Key is missing"
- Make sure you added the environment variables to Vercel
- Redeploy after adding environment variables

### "Failed to create user"
- Check the Supabase SQL Editor for any errors
- Verify the users table was created correctly
- Check the RLS policies are in place

### Users not appearing in database
- Verify the environment variables are correct
- Check Vercel deployment logs for errors
- Test locally first with `npm run dev`

## Database Management

### View Users
Go to Supabase Dashboard → Table Editor → users

### Backup Database
Supabase automatically backs up your database daily on the free plan.

### Reset Database
If you need to start fresh:
```sql
DELETE FROM users;
```

## Next Steps

Your ResearchPro application now has:
- ✅ Persistent database storage
- ✅ Secure password hashing
- ✅ User authentication
- ✅ Scalable infrastructure

Consider adding:
- Email verification
- Password reset functionality
- User profile updates
- Project management features

## Support

For Supabase issues: [https://supabase.com/docs](https://supabase.com/docs)
For ResearchPro issues: Check the main README.md
