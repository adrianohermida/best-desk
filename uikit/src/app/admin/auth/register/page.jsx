import dynamic from 'next/dynamic';

// @project
import AuthGuard from '@/guards/AuthGuard';

const Register = dynamic(() => import('@/views/auth/Register'));

/***************************  PAGE - ADMIN REGISTER  ***************************/

export default function AdminRegisterPage() {
  return (
    <AuthGuard requireAuth={false} redirectTo="/admin/dashboard">
      <Register />
    </AuthGuard>
  );
}
