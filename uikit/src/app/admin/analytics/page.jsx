// @next
import dynamic from 'next/dynamic';

// @project - Usando a view do admin dashboard
const AdminAnalytics = dynamic(() => import('@/views/admin/dashboard'), {
  loading: () => <div>Carregando Analytics...</div>
});

/***************************  ANALYTICS PAGE  ***************************/

export default function AnalyticsPage() {
  return <AdminAnalytics />;
}
