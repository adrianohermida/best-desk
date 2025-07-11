import PropTypes from 'prop-types';

// @project
import AdminLayout from '../../layouts/admin/AdminLayout';

/***************************  LAYOUT - ADMIN (PRESERVING ORIGINAL TEMPLATE)  ***************************/

export default function Layout({ children }) {
  return <AdminLayout>{children}</AdminLayout>;
}

Layout.propTypes = { children: PropTypes.any };
