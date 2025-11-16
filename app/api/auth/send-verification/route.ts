import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { getUserById, updateUser } from '@/lib/database';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

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

    // In a real application, you would:
    // 1. Generate a verification token
    // 2. Send an email with verification link
    // 3. Store the token in database

    // For demo/pentesting purposes, we'll simulate this
    console.log(`Verification request for: ${user.email}`);
    console.log(`User ID: ${user.id}`);
    console.log(`This would send an email in production`);

    // Simulate email sending success
    return NextResponse.json(
      {
        message: 'Verification request sent successfully',
        email: user.email,
        note: 'In production, an email would be sent. For pentesting, verification will be processed within 24 hours.',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Send verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
