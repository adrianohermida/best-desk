import PropTypes from 'prop-types';
// @project
import MainLayout from '@/views/landings/default/layout';

/***************************  LAYOUT - DEFAULT  ***************************/

export default function DefaultLayout({ children }) {
  return <MainLayout>{children}</MainLayout>;
}

DefaultLayout.propTypes = { children: PropTypes.any };
