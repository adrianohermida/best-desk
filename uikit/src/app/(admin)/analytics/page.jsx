// @next
import dynamic from 'next/dynamic';

// @project
const AnalyticsPage = dynamic(() => import('@/views/admin/dashboard'));

/***************************  ANALYTICS PAGE  ***************************/

export default function AnalyticsPages() {
  return <AnalyticsPage />;
}
