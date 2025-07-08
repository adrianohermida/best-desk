import PropTypes from 'prop-types';
// @next
import dynamic from 'next/dynamic';

// @project
const MainLayout = dynamic(() => import('@/views/landings/default/layout'));

/***************************  LAYOUT - DEFAULT  ***************************/

export default function DefaultLayout({ children }) {
  return <MainLayout>{children}</MainLayout>;
}

DefaultLayout.propTypes = { children: PropTypes.any };
