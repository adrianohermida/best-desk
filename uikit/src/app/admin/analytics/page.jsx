// @next
import dynamic from 'next/dynamic';

// @project - Usando a mesma dashboard page do template original
const AnalyticsPage = dynamic(() => import('@/views/admin/dashboard'));

/***************************  ANALYTICS PAGE  ***************************/

export default function AnalyticsPages() {
  return <AnalyticsPage />;
}
