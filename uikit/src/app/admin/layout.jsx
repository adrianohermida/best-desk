import PropTypes from 'prop-types';

// @next
import dynamic from 'next/dynamic';

// @project - Usando o layout original do template admin
const AdminLayout = dynamic(() => import('@admin/layouts/AdminLayout'));

/***************************  LAYOUT - ADMIN  ***************************/

export default function Layout({ children }) {
  return <AdminLayout>{children}</AdminLayout>;
}

Layout.propTypes = { children: PropTypes.any };
