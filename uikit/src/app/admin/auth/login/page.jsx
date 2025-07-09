import dynamic from 'next/dynamic';

// @project
import AuthGuard from '@/guards/AuthGuard';

const Login = dynamic(() => import('@/views/auth/Login'));

/***************************  PAGE - ADMIN LOGIN  ***************************/

export default function AdminLoginPage() {
  return (
    <AuthGuard requireAuth={false} redirectTo="/admin/dashboard">
      <Login />
    </AuthGuard>
  );
}
