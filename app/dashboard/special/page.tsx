import { fetchPosts } from '@/app/lib/api';
import SpecialView from '@/app/views/special/special.view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Special',
};

export default async function Page() {
  const posts = await fetchPosts();

  return (
    <>
      <h1>SPECIAL VIEW</h1>
      <SpecialView posts={posts} />
    </>
  );
}
