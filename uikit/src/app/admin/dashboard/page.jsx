// @next
import dynamic from 'next/dynamic';

// @project
const DashboardSimple = dynamic(() => import('@/views/admin/DashboardSimple'));

/***************************  ADMIN - DASHBOARD  ***************************/

export default function Dashboard() {
  return <DashboardSimple />;
}
