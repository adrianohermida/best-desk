// @next
import { NextResponse } from 'next/server';

// @project
import { prisma } from '@/lib/prisma';

/***************************  API - SUBSCRIPTIONS  ***************************/

// GET handler for /api/subscriptions
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const skip = (page - 1) * limit;

    // Get subscriptions with pagination
    const [subscriptions, total] = await Promise.all([
      prisma.subscription.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          email: true,
          name: true,
          source: true,
          isActive: true,
          createdAt: true
        }
      }),
      prisma.subscription.count()
    ]);

    return NextResponse.json({
      data: subscriptions,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    return NextResponse.json(
      {
        error: 'Internal server error'
      },
      { status: 500 }
    );
  }
}
