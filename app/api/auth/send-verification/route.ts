import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { getUserById } from '@/lib/database';
import { resend, FROM_EMAIL } from '@/lib/resend';
import { VerificationEmail } from '@/lib/email-templates';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'No token provided' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);

    // Verify token
    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET) as { userId: string; email: string };
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    // Get user data
    const user = await getUserById(decoded.userId);

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Check if already verified
    if (user.emailVerified) {
      return NextResponse.json(
        { error: 'Email already verified' },
        { status: 400 }
      );
    }

    // Generate verification token (valid for 24 hours)
    const verificationToken = jwt.sign(
      { userId: user.id, email: user.email, type: 'verification' },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Create verification URL
    const verificationUrl = `${APP_URL}/api/auth/verify-email?token=${verificationToken}`;

    // Send email using Resend
    try {
      const { data, error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: [user.email],
        subject: '🎉 Verify Your Email & Claim $200 - ResearchPro',
        react: VerificationEmail({
          verificationUrl,
          email: user.email,
        }),
      });

      if (error) {
        console.error('Resend error:', error);
        return NextResponse.json(
          { error: 'Failed to send verification email. Please try again.' },
          { status: 500 }
        );
      }

      console.log('Verification email sent:', data);

      return NextResponse.json(
        {
          message: 'Verification email sent successfully',
          email: user.email,
        },
        { status: 200 }
      );

    } catch (emailError) {
      console.error('Email sending error:', emailError);
      return NextResponse.json(
        { error: 'Failed to send verification email. Please check your email configuration.' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Send verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
