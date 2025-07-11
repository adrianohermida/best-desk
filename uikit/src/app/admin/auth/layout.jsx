import PropTypes from 'prop-types';

// @project
import AuthLayout from '@/layouts/admin/AuthLayout';

/***************************  LAYOUT - ADMIN AUTH (PRESERVING ORIGINAL TEMPLATE)  ***************************/

export default function Layout({ children }) {
  return <AuthLayout>{children}</AuthLayout>;
}

Layout.propTypes = { children: PropTypes.any };
