// @next
import dynamic from 'next/dynamic';

// @project - Usando sample page do template original para users
const UsersPage = dynamic(() => import('@/views/admin/sample-page'));

/***************************  USERS PAGE  ***************************/

export default function UsersPages() {
  return <UsersPage />;
}
