// @next
import dynamic from 'next/dynamic';

// @project
const UsersPage = dynamic(() => import('@/views/admin/dashboard'));

/***************************  USERS PAGE  ***************************/

export default function UsersPages() {
  return <UsersPage />;
}
