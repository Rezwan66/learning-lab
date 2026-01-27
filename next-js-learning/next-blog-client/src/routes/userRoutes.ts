import { Route } from '@/types';

export const userRoutes: Route[] = [
  {
    title: 'Blog Management',
    items: [
      {
        title: 'Create Blog',
        url: '/dashboard/create-blog',
      },
      {
        title: 'History',
        url: '/dashboard/history',
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
        // isActive: true,
      },
    ],
  },
];
