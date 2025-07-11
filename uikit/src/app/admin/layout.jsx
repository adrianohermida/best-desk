import PropTypes from 'prop-types';

// @project
import AdminLayoutSimple from '../../layouts/admin/AdminLayoutSimple';

/***************************  LAYOUT - ADMIN (PRESERVING ORIGINAL TEMPLATE)  ***************************/

export default function Layout({ children }) {
  return <AdminLayoutSimple>{children}</AdminLayoutSimple>;
}

Layout.propTypes = { children: PropTypes.any };
