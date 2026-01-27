import { CreateBlogFormClient } from '@/components/modules/user/createBlog/CreateBlogFormClient';
import CreateBlogFormServer from '@/components/modules/user/createBlog/CreateBlogFormServer';
import { blogService } from '@/services/blog.service';
import { BlogPost } from '@/types';

export default async function CreateBlogPage() {
  const { data } = await blogService.getBlogPosts({}, { cache: 'no-store' });

  return (
    <div>
      {/* <CreateBlogFormServer /> */}

      <CreateBlogFormClient />

      {data.data.data.map((blog: BlogPost) => (
        <p key={blog.id}>{blog.title}</p>
      ))}
    </div>
  );
}
