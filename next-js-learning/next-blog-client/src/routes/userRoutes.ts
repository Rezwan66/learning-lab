import { Route } from '@/types';

export const userRoutes: Route[] = [
  {
    title: 'Blog Management',
    items: [
      {
        title: 'Create Blog',
        url: '/create-blog',
      },
      {
        title: 'Posts',
        url: '/posts',
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
