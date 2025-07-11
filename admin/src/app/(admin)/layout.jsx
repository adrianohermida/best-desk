import PropTypes from 'prop-types';

// @project
import AdminLayout from '@/layouts/AdminLayout';

/***************************  LAYOUT - ADMIN  ***************************/

export default function Layout({ children }) {
  return <AdminLayout>{children}</AdminLayout>;
}

Layout.propTypes = { children: PropTypes.any };
