import RoleGuard from '@/admin/guards/RoleGuard';

export default function UserLayoutWrapper({ children }) {
  return (
    <RoleGuard requiredRoles={['USER']} redirectTo="/sections/auth/login">
      {children}
    </RoleGuard>
  );
}
