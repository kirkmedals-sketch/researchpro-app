-- Migration: Auto-verify all users for pentesting
-- Run this in Supabase SQL Editor to fix existing users

-- Step 1: Update all existing users to be verified
UPDATE users
SET email_verified = TRUE
WHERE email_verified = FALSE;

-- Step 2: Change the default value for new users to auto-verify
ALTER TABLE users
ALTER COLUMN email_verified SET DEFAULT TRUE;

-- Done! All users are now verified and new users will be auto-verified
