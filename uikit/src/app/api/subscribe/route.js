// @next
import { NextResponse } from 'next/server';

// @third-party
import axios from 'axios';

// @project
import { prisma } from '@/lib/prisma';
import { withRateLimit, RATE_LIMITS } from '@/lib/rateLimiter';

/***************************  API - SUBSCRIBE  ***************************/

// POST handler for /api/subscribe
export async function POST(request) {
  return withRateLimit(request, RATE_LIMITS.SUBSCRIPTION, async () => {
    try {
      const { email, name } = await request.json();

      // Validate email
      if (!email) {
        return NextResponse.json({ error: 'Email is required' }, { status: 400 });
      }

      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
      }

      // Save to database first
      await prisma.subscription.upsert({
        where: { email },
        update: {
          name,
          isActive: true,
          updatedAt: new Date()
        },
        create: {
          email,
          name,
          source: 'newsletter',
          isActive: true
        }
      });

      // Optional: Also send to MailerLite if configured
      if (process.env.MAILERLITE_API_ENDPOINT && process.env.MAILERLITE_API_KEY) {
        try {
          const mailerLiteUrl = `${process.env.MAILERLITE_API_ENDPOINT}/subscribers`;

          await axios.post(
            mailerLiteUrl,
            {
              email,
              name,
              groups: process.env.MAILERLITE_GROUP?.trim().replaceAll(' ', '').split(',')
            },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`
              }
            }
          );
        } catch (mailerLiteError) {
          console.warn('MailerLite sync failed, but subscription saved locally:', mailerLiteError.message);
        }
      }

      return NextResponse.json(
        {
          message: 'Subscribed successfully!',
          success: true
        },
        { status: 200 }
      );
    } catch (error) {
      console.error('Error subscribing:', error);

      // Return more specific error messages
      if (error.code === 'P2002') {
        return NextResponse.json(
          {
            error: 'Email already subscribed',
            success: false
          },
          { status: 409 }
        );
      }

      return NextResponse.json(
        {
          error: 'Internal server error',
          success: false
        },
        { status: 500 }
      );
    }
  });
}
