import PropTypes from 'prop-types';

// @project
import AdminLayoutOriginal from '@/layouts/admin/AdminLayout';

/***************************  LAYOUT - ADMIN (PRESERVING ORIGINAL TEMPLATE)  ***************************/

export default function Layout({ children }) {
  return <AdminLayoutOriginal>{children}</AdminLayoutOriginal>;
}

Layout.propTypes = { children: PropTypes.any };
