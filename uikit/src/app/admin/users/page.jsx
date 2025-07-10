// @next
import dynamic from 'next/dynamic';

// @project - Usando a view do admin dashboard
const AdminUsers = dynamic(() => import('@/views/admin/dashboard'), {
  loading: () => <div>Carregando Users...</div>
});

/***************************  USERS PAGE  ***************************/

export default function UsersPage() {
  return <AdminUsers />;
}
