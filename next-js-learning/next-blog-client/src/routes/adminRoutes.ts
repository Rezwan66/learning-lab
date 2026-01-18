import { Route } from '@/types';

export const adminRoutes: Route[] = [
  {
    title: 'User Management',
    items: [
      {
        title: 'Analytics',
        url: '/analytics',
      },
      {
        title: 'Users',
        url: '/users',
      },
    ],
  },
  {
    title: 'Main Website',
    items: [
      {
        title: 'Home',
        url: '/',
      },
      {
        title: 'Data Fetching',
        url: '#',
        isActive: true,
      },
    ],
  },
];
