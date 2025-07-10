// @next
import dynamic from 'next/dynamic';

// @project - Usando a estrutura do template admin original
const UsersPage = dynamic(() => import('../../../../admin/src/views/admin/dashboard'));

/***************************  USERS PAGE  ***************************/

export default function UsersPages() {
  return <UsersPage />;
}
