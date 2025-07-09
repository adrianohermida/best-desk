import PropTypes from 'prop-types';
// @next
import dynamic from 'next/dynamic';

// @project
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const MainLayout = dynamic(() => import('@/views/landings/default/layout'));

/***************************  LAYOUT - DEFAULT  ***************************/

export default function DefaultLayout({ children }) {
  return (
    <MainLayout>
      <>
        {children}

        {/* scroll to top section */}
        <ScrollFab />
      </>
    </MainLayout>
  );
}

DefaultLayout.propTypes = { children: PropTypes.any };
