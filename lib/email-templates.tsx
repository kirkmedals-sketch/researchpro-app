import * as React from 'react';

interface VerificationEmailProps {
  verificationUrl: string;
  email: string;
}

export const VerificationEmail: React.FC<VerificationEmailProps> = ({
  verificationUrl,
  email,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
    <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '40px 20px', textAlign: 'center', borderRadius: '8px 8px 0 0' }}>
      <h1 style={{ color: 'white', margin: '0', fontSize: '32px', fontWeight: 'bold' }}>ResearchPro</h1>
      <p style={{ color: 'rgba(255,255,255,0.9)', margin: '10px 0 0 0', fontSize: '18px' }}>Academic Writing Services</p>
    </div>

    <div style={{ backgroundColor: '#ffffff', padding: '40px 30px', borderRadius: '0 0 8px 8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#1a202c', fontSize: '24px', marginBottom: '20px' }}>🎉 Verify Your Email & Claim $200!</h2>

      <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
        Hello! Thank you for registering with ResearchPro.
      </p>

      <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
        Click the button below to verify your email address and unlock your <strong style={{ color: '#16a34a' }}>$200 registration bonus</strong>:
      </p>

      <div style={{ textAlign: 'center', margin: '30px 0' }}>
        <a
          href={verificationUrl}
          style={{
            display: 'inline-block',
            padding: '16px 40px',
            backgroundColor: '#16a34a',
            color: '#ffffff',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '18px',
            fontWeight: 'bold',
            boxShadow: '0 4px 6px rgba(22, 163, 74, 0.3)'
          }}
        >
          Verify Email & Claim $200
        </a>
      </div>

      <div style={{ backgroundColor: '#fef3c7', border: '2px solid #fbbf24', borderRadius: '8px', padding: '20px', margin: '30px 0' }}>
        <h3 style={{ color: '#92400e', margin: '0 0 10px 0', fontSize: '18px' }}>🎁 Your Benefits:</h3>
        <ul style={{ color: '#78350f', margin: '0', paddingLeft: '20px' }}>
          <li style={{ marginBottom: '8px' }}>$200 bonus credited within 24 hours</li>
          <li style={{ marginBottom: '8px' }}>Access to all premium features</li>
          <li style={{ marginBottom: '8px' }}>Priority customer support</li>
          <li>Exclusive referral rewards program</li>
        </ul>
      </div>

      <p style={{ color: '#4a5568', fontSize: '14px', lineHeight: '1.6', marginBottom: '10px' }}>
        If the button doesn't work, copy and paste this link into your browser:
      </p>
      <p style={{ color: '#667eea', fontSize: '14px', wordBreak: 'break-all', backgroundColor: '#f7fafc', padding: '10px', borderRadius: '4px' }}>
        {verificationUrl}
      </p>

      <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '30px', paddingTop: '20px' }}>
        <p style={{ color: '#718096', fontSize: '14px', lineHeight: '1.6', margin: '0' }}>
          This verification link will expire in 24 hours.
        </p>
        <p style={{ color: '#718096', fontSize: '14px', lineHeight: '1.6', margin: '10px 0 0 0' }}>
          If you didn't create an account with ResearchPro, you can safely ignore this email.
        </p>
      </div>
    </div>

    <div style={{ textAlign: 'center', padding: '20px', color: '#a0aec0', fontSize: '12px' }}>
      <p style={{ margin: '0 0 10px 0' }}>© 2024 ResearchPro. All rights reserved.</p>
      <p style={{ margin: '0' }}>Professional Academic Writing Services</p>
    </div>
  </div>
);

export const WelcomeEmail: React.FC<{ email: string }> = ({ email }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
    <div style={{ background: 'linear-gradient(135deg, #16a34a 0%, #059669 100%)', padding: '40px 20px', textAlign: 'center', borderRadius: '8px 8px 0 0' }}>
      <h1 style={{ color: 'white', margin: '0', fontSize: '32px', fontWeight: 'bold' }}>✅ Email Verified!</h1>
    </div>

    <div style={{ backgroundColor: '#ffffff', padding: '40px 30px', borderRadius: '0 0 8px 8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#1a202c', fontSize: '24px', marginBottom: '20px' }}>🎉 Welcome to ResearchPro!</h2>

      <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
        Congratulations! Your email has been successfully verified.
      </p>

      <div style={{ backgroundColor: '#d1fae5', border: '2px solid #16a34a', borderRadius: '8px', padding: '20px', margin: '30px 0', textAlign: 'center' }}>
        <h3 style={{ color: '#065f46', margin: '0 0 10px 0', fontSize: '24px', fontWeight: 'bold' }}>💰 $200 Bonus Activated!</h3>
        <p style={{ color: '#047857', margin: '0', fontSize: '16px' }}>
          Your registration bonus will be credited to your account within 24 hours.
        </p>
      </div>

      <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
        You now have access to:
      </p>

      <ul style={{ color: '#4a5568', fontSize: '16px', lineHeight: '1.8' }}>
        <li>All premium writing services</li>
        <li>24/7 priority support</li>
        <li>Referral rewards program</li>
        <li>Exclusive discounts and promotions</li>
      </ul>

      <div style={{ textAlign: 'center', margin: '30px 0' }}>
        <a
          href={`${process.env.NEXT_PUBLIC_APP_URL || 'https://your-app.vercel.app'}/dashboard`}
          style={{
            display: 'inline-block',
            padding: '16px 40px',
            backgroundColor: '#667eea',
            color: '#ffffff',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '18px',
            fontWeight: 'bold',
            boxShadow: '0 4px 6px rgba(102, 126, 234, 0.3)'
          }}
        >
          Go to Dashboard
        </a>
      </div>
    </div>

    <div style={{ textAlign: 'center', padding: '20px', color: '#a0aec0', fontSize: '12px' }}>
      <p style={{ margin: '0' }}>© 2024 ResearchPro. All rights reserved.</p>
    </div>
  </div>
);
