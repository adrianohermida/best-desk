// @next
import dynamic from 'next/dynamic';

// @project
const AdminLogin = dynamic(() => import('../../../../views/admin/auth/login'));

/***************************  ADMIN AUTH - LOGIN  ***************************/

export default function Login() {
  return <AdminLogin />;
}
