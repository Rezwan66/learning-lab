'use client';
import { getBlogs } from '@/actions/blog.action';
import { blogService } from '@/services/blog.service';
import { useEffect, useState } from 'react';

//! we will not do this for page server components in real life use case
// export const dynamic = 'force-dynamic'; //* this is actually for build-time, on build, if this is not provided, Nextjs takes the time of the setTimeout onbuild, and doesnt show the loading on the page-->it force caches the page coming from server. Hence we need this to instruct Nextjs to say: “I don’t care if you think this can be static. Run this page on the server on every request.”

export default function AboutPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState<{ message: string } | null>(null);

  console.log({ data, error });

  useEffect(() => {
    // IIFE function
    (async () => {
      // const { data } = await blogService.getBlogPosts(); //! This cannot be done in client components since it runs on browser while the blogService runs on the server.

      const { data, error } = await getBlogs();
      setData(data);
      setError(error);
    })();
  }, []);
  return (
    <div>
      <h2>AboutPage page</h2>
    </div>
  );
}

//* For simulating load time
// await new Promise(resolve => setTimeout(resolve, 4000));

//* For simulating error
// throw new Error('Something went wrong! 🧐');
