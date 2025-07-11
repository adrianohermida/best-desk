// @next
import dynamic from 'next/dynamic';

// @project
const DashboardSimple = dynamic(() => import('@/views/admin/DashboardSimple'), {
  loading: () => <div style={{ padding: '20px' }}>Loading...</div>
});

/***************************  ADMIN - DASHBOARD  ***************************/

export default function Dashboard() {
  return <DashboardSimple />;
}
