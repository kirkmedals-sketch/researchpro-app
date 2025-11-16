import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { getUserById, updateUser } from '@/lib/database';
import { resend, FROM_EMAIL } from '@/lib/resend';
import { WelcomeEmail } from '@/lib/email-templates';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.redirect(new URL('/dashboard?error=invalid-token', request.url));
    }

    // Verify the verification token
    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET) as {
        userId: string;
        email: string;
        type: string;
      };

      // Check if it's a verification token
      if (decoded.type !== 'verification') {
        return NextResponse.redirect(new URL('/dashboard?error=invalid-token-type', request.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL('/dashboard?error=expired-token', request.url));
    }

    // Get user
    const user = await getUserById(decoded.userId);

    if (!user) {
      return NextResponse.redirect(new URL('/dashboard?error=user-not-found', request.url));
    }

    // Check if already verified
    if (user.emailVerified) {
      return NextResponse.redirect(new URL('/dashboard?message=already-verified', request.url));
    }

    // Update user as verified
    await updateUser(user.id, {
      emailVerified: true,
    });

    // Send welcome email
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: [user.email],
        subject: '✅ Welcome to ResearchPro - Email Verified!',
        react: WelcomeEmail({
          email: user.email,
        }),
      });
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
      // Don't fail the verification if welcome email fails
    }

    // Redirect to dashboard with success message
    return NextResponse.redirect(new URL('/dashboard?verified=true', request.url));

  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.redirect(new URL('/dashboard?error=verification-failed', request.url));
  }
}
