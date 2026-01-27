import HistoryTable from '@/components/modules/user/history/HistoryTable';
import PaginationControls from '@/components/ui/pagination-controls';
import { blogService } from '@/services/blog.service';

export default async function HistoryPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; limit?: string }>;
}) {
  //# Handling the data in this way using searchParams for pagination instead of maintaining a common react internal state is that--->it is great for link sharing, and the person with whom this page with the actual URL params is shared will see the exact data on the exact page number and limit.
  const { page, limit } = await searchParams;
  //   console.log({ page, limit });

  const response = await blogService.getBlogPosts({ page, limit });
  const posts = response?.data?.data?.data || [];
  //   console.log(posts);

  const pagination = response?.data?.data?.pagination || {
    limit: 10,
    page: 1,
    total: 0,
    totalPages: 1,
  };
  //   console.log(pagination);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Blog Post History</h1>
      <HistoryTable posts={posts} />

      <PaginationControls meta={pagination} />
    </div>
  );
}
