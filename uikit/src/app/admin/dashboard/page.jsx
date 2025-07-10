// @next
import dynamic from 'next/dynamic';

// @project - Usando a view do admin dashboard diretamente
const AdminDashboard = dynamic(() => import('@/views/admin/dashboard'), {
  loading: () => <div>Carregando Dashboard...</div>
});

/***************************  DASHBOARD PAGE  ***************************/

export default function DashboardPage() {
  return <AdminDashboard />;
}
