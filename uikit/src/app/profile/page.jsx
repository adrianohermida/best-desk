import dynamic from 'next/dynamic';

// @project
import AuthGuard from '@/guards/AuthGuard';

const ProfileView = dynamic(() => import('@/views/profile'), {
  loading: () => <div>Loading...</div>
});

/***************************  PAGE - PROFILE  ***************************/

export default function ProfilePage() {
  return (
    <AuthGuard requireAuth={true}>
      <ProfileView />
    </AuthGuard>
  );
}
