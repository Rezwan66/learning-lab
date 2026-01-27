import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { env } from '@/env';
import { revalidateTag, updateTag } from 'next/cache';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { toast } from 'sonner';

const API_URL = env.API_URL;

export default function CreateBlogFormServer() {
  const createBlog = async (formData: FormData) => {
    'use server';
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const tags = formData.get('tags') as string;

    const blogData = {
      title,
      content,
      tags: tags
        .split(',')
        .map(item => item.trim())
        .filter(item => item !== ''),
    };
    console.log(JSON.stringify(blogData)); //the backend expects json data

    const cookieStore = await cookies();
    const res = await fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: cookieStore.toString(),
      },
      body: JSON.stringify(blogData),
    });

    console.log(res);

    // toast('Success'); //! <---- We will get error: Attempted to call toast() from the server but toast is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component. One way to solve:
    // if (res.status) {
    //   redirect('/dashboard/create-blog?success');
    // }
    //! Also cannot do ZOD form validation
    //! But jest to just do these in the Client

    if (res.ok) {
      revalidateTag('blogPosts', 'max'); // stales the cache in the background, and shows update to the user when they visit
      //   updateTag('blogPosts') // immediately refetches cache, use either
    }
  };
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create Title</CardTitle>
        <CardDescription>Start writing your blog post</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="blog-form" action={createBlog}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="title">Title</FieldLabel>
              <Input
                id="title"
                name="title"
                placeholder="Blog Title"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="content">Content</FieldLabel>
              <Textarea
                id="content"
                name="content"
                placeholder="Write your blog"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="tags">Tags (comma separated)</FieldLabel>
              <Input id="tags" name="tags" placeholder="nextjs, web" />
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button form="blog-form" type="submit" className="w-full">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
