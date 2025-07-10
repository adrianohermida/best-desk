// @next
import dynamic from 'next/dynamic';

// @project - Usando a estrutura do template admin original
const DashboardPage = dynamic(() => import('@admin/views/admin/dashboard'));

/***************************  DASHBOARD PAGE  ***************************/

export default function DashboardPages() {
  return <DashboardPage />;
}
