import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';

export default async function Home() {
  const session = await authClient.getSession();
  // const res = await fetch('http://localhost:5000/posts');
  // const posts = await res.json();

  console.log(session);
  return (
    <div className="">
      {/* {posts?.data.data.map((p: { id: string; title: string }) => (
        <div key={p.id}>{p.title}</div>
      ))} */}
      <Button className="cursor-pointer" variant="outline">
        Click here
      </Button>
    </div>
  );
}
