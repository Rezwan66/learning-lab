import BlogCard from '@/components/modules/homepage/BlogCard';
import { Button } from '@/components/ui/button';
import { blogService } from '@/services/blog.service';
import { BlogPost } from '@/types';

export default async function Home() {
  const { data } = await blogService.getBlogPosts(
    {
      isFeatured: false,
      // search: 'goth',
    },
    {
      cache: 'no-store',
      // revalidate: 10,
    }
  );
  // console.dir(data, { depth: 2 });

  return (
    <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-5">
      {data?.data?.data.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
