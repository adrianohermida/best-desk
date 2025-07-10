// @next
import dynamic from 'next/dynamic';

// @project - Usando a estrutura do template admin original
const AnalyticsPage = dynamic(() => import('../../../../admin/src/views/admin/dashboard'));

/***************************  ANALYTICS PAGE  ***************************/

export default function AnalyticsPages() {
  return <AnalyticsPage />;
}
