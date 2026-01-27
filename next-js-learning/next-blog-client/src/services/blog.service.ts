import { env } from '@/env';
import { error } from 'console';
import { cookies } from 'next/headers';

const API_URL = env.API_URL;

//* No Dynamic and No { cache: no-store } : SSG -> Static Page
//* { cache: no-store } : SSR -> Dynamic Page
//* {next: { revalidate: 10 }} : ISR -> Mix between static and dynamic

interface GetBlogsParams {
  isFeatured?: boolean;
  search?: string;
  page?: string;
  limit?: string;
}

interface ServiceOptions {
  cache?: RequestCache;
  revalidate?: number;
}

export interface BlogData {
  title: string;
  content: string;
  tags?: string[];
}

export const blogService = {
  getBlogPosts: async function (
    params?: GetBlogsParams,
    options?: ServiceOptions,
  ) {
    try {
      // const res = await fetch(`${API_URL}/posts`); //# SSG
      // const res = await fetch(`${API_URL}/posts`, { cache: 'no-store' }); //# SSR
      // const res = await fetch(`${API_URL}/posts`, { next: { revalidate: 10 } }); //# ISR

      const url = new URL(`${API_URL}/posts`);

      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== '') {
            url.searchParams.append(key, value);
          }
        });
      }

      // console.log(url.toString());

      const config: RequestInit = {};

      if (options?.cache) {
        config.cache = options.cache;
      }

      if (options?.revalidate) {
        config.next = { revalidate: options.revalidate };
      }

      config.next = { ...config.next, tags: ['blogPosts'] };

      // const res = await fetch(url.toString(), {
      //   next: { tags: ['blogPosts'] },
      // });

      const res = await fetch(url.toString(), config);

      const data = await res.json();

      //   Example industry standard:
      //   if (data.success) {
      //     return { data: data, error: null };
      //   }

      return { data: data, error: null };
    } catch (err) {
      return { data: null, error: { message: 'Something Went Wrong' } };
    }
  },

  getBlogById: async function (id: string) {
    try {
      const res = await fetch(`${API_URL}/posts/${id}`);
      const data = await res.json();

      return { data, error: null };
    } catch (error) {
      return { data: null, error: { message: 'Something Went Wrong!' } };
    }
  },

  createBlogPost: async (blogData: BlogData) => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify(blogData),
      });
      const data = await res.json();

      if (data.error) {
        return {
          data: null,
          error: {
            message:
              // data.error ||
              'Error: Post not created!',
          },
        };
      }

      return { data, error: null };
    } catch (error) {
      return { data: null, error: { message: 'Something Went Wrong!' } };
    }
  },
};
