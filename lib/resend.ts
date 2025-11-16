import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
// Use a dummy key for build if not configured
const apiKey = process.env.RESEND_API_KEY || 're_dummy_key_for_build';
export const resend = new Resend(apiKey);

// Default sender email (you'll set this up in Resend dashboard)
export const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

// Helper to check if Resend is properly configured
export const isResendConfigured = () => {
  return process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_dummy_key_for_build';
};
