import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Mock function to check admin permissions
// In real implementation, verify JWT token and check roles
function verifyAdminAccess(request) {
  // Mock admin verification - replace with real auth
  // const authHeader = request.headers.get('authorization');
  // TODO: Implement real JWT verification
  return true; // For now, allow all requests
}

export async function GET(request) {
  try {
    // Verify admin access
    if (!verifyAdminAccess(request)) {
      return NextResponse.json({ error: 'Unauthorized access' }, { status: 401 });
    }

    // Get dashboard statistics
    const [totalUsers, totalContacts, totalSubscriptions, recentContacts, analyticsData] = await Promise.all([
      // Count total users (mock data since User table might not have entries)
      Promise.resolve(2847),

      // Count total contacts
      prisma.contact.count(),

      // Count active subscriptions
      prisma.subscription.count({
        where: { isActive: true }
      }),

      // Get recent contacts
      prisma.contact.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          name: true,
          email: true,
          subject: true,
          isRead: true,
          createdAt: true
        }
      }),

      // Get analytics data
      prisma.analytics.findMany({
        take: 30,
        orderBy: { createdAt: 'desc' },
        select: {
          page: true,
          views: true,
          uniqueViews: true,
          createdAt: true
        }
      })
    ]);

    // Calculate additional metrics
    const totalPageViews = analyticsData.reduce((sum, item) => sum + item.views, 0);
    const unreadContacts = await prisma.contact.count({
      where: { isRead: false }
    });

    // Mock data for legal-specific metrics
    const mockLegalData = {
      activeCases: 1429,
      completedCases: 856,
      scheduledHearings: 23,
      pendingDocuments: 45
    };

    const dashboardData = {
      stats: {
        totalUsers,
        activeCases: mockLegalData.activeCases,
        totalContacts,
        totalPageViews,
        unreadContacts,
        activeSubscriptions: totalSubscriptions,
        scheduledHearings: mockLegalData.scheduledHearings,
        pendingDocuments: mockLegalData.pendingDocuments
      },
      recentActivity: recentContacts.map((contact) => ({
        id: contact.id,
        type: 'contact',
        user: contact.name,
        action: 'sent a message',
        target: contact.subject || 'General inquiry',
        time: formatTimeAgo(contact.createdAt),
        isRead: contact.isRead
      })),
      analytics: {
        pageViews: analyticsData,
        totalViews: totalPageViews,
        topPages: getTopPages(analyticsData)
      },
      systemHealth: {
        database: 'online',
        email: 'online',
        storage: 'online',
        backup: 'warning'
      }
    };

    return NextResponse.json(dashboardData);
  } catch (error) {
    console.error('Dashboard API error:', error);
    return NextResponse.json({ error: 'Failed to fetch dashboard data' }, { status: 500 });
  }
}

// Helper functions
function formatTimeAgo(date) {
  const now = new Date();
  const diffInSeconds = Math.floor((now - new Date(date)) / 1000);

  if (diffInSeconds < 60) return 'agora mesmo';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutos atrás`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} horas atrás`;
  return `${Math.floor(diffInSeconds / 86400)} dias atrás`;
}

function getTopPages(analyticsData) {
  const pageViews = {};
  analyticsData.forEach((item) => {
    pageViews[item.page] = (pageViews[item.page] || 0) + item.views;
  });

  return Object.entries(pageViews)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([page, views]) => ({ page, views }));
}
