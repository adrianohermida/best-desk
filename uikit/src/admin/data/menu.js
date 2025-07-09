/***************************  MENU ITEMS - ADMIN  ***************************/

const adminMenu = {
  id: 'group-admin',
  title: 'Admin',
  icon: 'IconBrandAsana',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/admin/dashboard',
      icon: 'IconLayoutGrid'
    },
    {
      id: 'users',
      title: 'Users',
      type: 'item',
      url: '/admin/users',
      icon: 'IconUsers'
    },
    {
      id: 'content',
      title: 'Content',
      type: 'item',
      url: '/admin/content',
      icon: 'IconFileText'
    },
    {
      id: 'analytics',
      title: 'Analytics',
      type: 'item',
      url: '/admin/analytics',
      icon: 'IconChartBar'
    },
    {
      id: 'settings',
      title: 'Settings',
      type: 'item',
      url: '/admin/settings',
      icon: 'IconSettings'
    }
  ]
};

const menuItems = {
  items: [adminMenu]
};

export default menuItems;
