import { DashboardOutlined, ChromeReaderModeOutlined, LoginOutlined } from '@mui/icons-material';

const menuItems = {
  items: [
    {
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          url: '/admin/dashboard',
          icon: DashboardOutlined,
          breadcrumbs: false
        },
        {
          id: 'sample-page',
          title: 'Sample Page',
          type: 'item',
          url: '/admin/sample-page',
          icon: ChromeReaderModeOutlined
        }
      ]
    },
    {
      id: 'authentication',
      title: 'Authentication',
      type: 'group',
      children: [
        {
          id: 'auth-login',
          title: 'Login',
          type: 'item',
          url: '/admin/auth/login',
          icon: LoginOutlined,
          target: false
        }
      ]
    }
  ]
};

export default menuItems;
