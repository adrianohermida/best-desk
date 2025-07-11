'use client';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';

// @project
import NavCard from './NavCard';
import ResponsiveDrawer from './ResponsiveDrawer';

import { useGetMenuMaster } from '../../../../../admin/hooks/useMenuState';
import { MINI_DRAWER_WIDTH } from '../../../../../admin/config';
import SimpleBar from '../../../../../components/admin/third-party/SimpleBar';

/***************************  DRAWER - CONTENT  ***************************/

export default function DrawerContent() {
  const upMD = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  const contentHeight = `calc(100vh - ${MINI_DRAWER_WIDTH}px)`;

  return (
    <SimpleBar sx={{ height: contentHeight }}>
      <Stack sx={{ minHeight: contentHeight, px: !drawerOpen && upMD ? 0 : 2, justifyContent: 'space-between' }}>
        <ResponsiveDrawer />
        <NavCard />
      </Stack>
    </SimpleBar>
  );
}
