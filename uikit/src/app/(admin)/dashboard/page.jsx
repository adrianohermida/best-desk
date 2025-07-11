// @next
import dynamic from 'next/dynamic';

// @project
const AdminDashboard = dynamic(() => import('@/views/admin/dashboard'));

/***************************  ADMIN - DASHBOARD  ***************************/

export default function Dashboard() {
  return <AdminDashboard />;
}
