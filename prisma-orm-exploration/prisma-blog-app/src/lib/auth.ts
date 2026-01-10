import { betterAuth, userSchema } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { prisma } from './prisma';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: process.env.APP_USER,
    pass: process.env.APP_PASS,
  },
});

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql', // or "mysql", "postgresql", ...etc
  }),
  trustedOrigins: [process.env.APP_URL!],
  user: {
    additionalFields: {
      role: {
        type: 'string',
        defaultValue: 'USER',
        required: false,
      },
      phone: {
        type: 'string',
        required: false,
      },
      status: {
        type: 'string',
        defaultValue: 'ACTIVE',
        required: false,
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      try {
        const verificationUrl = `${process.env.APP_URL}/verify-email?token=${token}`;

        const info = await transporter.sendMail({
          from: '"Prisma Blog" <prismablog@ph.com>',
          to: user.email,
          subject: 'Please verify your email!',
          html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Verification</title>
      <style>
        body { font-family: 'Arial', sans-serif; background-color: #f8f8f8; margin: 0; padding: 0; color: #333; }
        .container { width: 100%; max-width: 600px; margin: 20px auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
        .header { text-align: center; margin-bottom: 20px; }
        .header h1 { color: #4CAF50; font-size: 32px; }
        .content { text-align: center; margin-bottom: 30px; }
        .content p { font-size: 18px; line-height: 1.5; }
        .button { display: inline-block; background-color: #4CAF50; color: #fff; font-size: 18px; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
        .link { word-break: break-all; font-size: 13px; color: #2563eb; }
        .footer { text-align: center; font-size: 14px; color: #999; margin-top: 40px; }
        .footer p { margin: 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Email Verification</h1>
        </div>
        <div class="content">
          <p>Hi there ${user.name},</p>
          <p>Thank you for signing up! We're excited to have you as part of our community.</p>
          <p>To complete your registration, please verify your email address by clicking the button below:</p>
          <a href="${verificationUrl}" class="button">Verify Email</a>
          
          <p>If the button doesn't work, copy and paste the link below into your browser:</p>
          <p class="link">
            ${url}
          </p>
          
          <p>If you didn’t sign up for an account, please ignore this email.</p>
        </div>
        <div class="footer">
          <p>Best regards,</p>
          <p>The Prisma Blog Team</p>
          <p><small>If you have any questions, feel free to reach out to us at support@prismablog.com</small></p>
        </div>
      </div>
    </body>
    </html>
  `,
        });

        console.log('Message sent:', info.messageId);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },

  socialProviders: {
    google: {
      prompt: 'select_account consent',
      accessType: 'offline',
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});
