import PropTypes from 'prop-types';

// @next
import dynamic from 'next/dynamic';

// @project - Usando o layout admin local
const AdminLayout = dynamic(() => import('@/layouts/AdminLayout'), {
  loading: () => <div>Carregando Layout Admin...</div>
});

/***************************  LAYOUT - ADMIN  ***************************/

export default function Layout({ children }) {
  return <AdminLayout>{children}</AdminLayout>;
}

Layout.propTypes = { children: PropTypes.any };
