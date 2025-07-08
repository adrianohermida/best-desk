// @next
import { NextResponse } from 'next/server';

// @project
import { prisma } from '@/lib/prisma';

/***************************  API - CONTACT  ***************************/

// POST handler for /api/contact
export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: 'Name, email and message are required'
        },
        { status: 400 }
      );
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          error: 'Invalid email format'
        },
        { status: 400 }
      );
    }

    // Save contact to database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        subject: subject || 'Contact Form Submission',
        message
      }
    });

    return NextResponse.json(
      {
        message: 'Contact submitted successfully!',
        success: true,
        id: contact.id
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting contact:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        success: false
      },
      { status: 500 }
    );
  }
}

// GET handler for /api/contact
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const skip = (page - 1) * limit;

    // Get contacts with pagination
    const [contacts, total] = await Promise.all([
      prisma.contact.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' }
      }),
      prisma.contact.count()
    ]);

    return NextResponse.json({
      data: contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      {
        error: 'Internal server error'
      },
      { status: 500 }
    );
  }
}
