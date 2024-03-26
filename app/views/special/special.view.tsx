'use client';

import type { MouseEvent } from 'react';
import Link from 'next/link';
import { useCount, useDispatchCount } from '@/app/providers/context';
import { Post } from '@/app/lib/api';

export default function SpecialView({ posts }: { posts: Post[] }) {
  const count = useCount();
  const dispatch = useDispatchCount();

  const handleIncrease = (event: MouseEvent<HTMLButtonElement>) =>
    dispatch({
      type: 'INCREASE',
    });
  const handleDecrease = (event: MouseEvent<HTMLButtonElement>) =>
    dispatch({
      type: 'DECREASE',
    });

  return (
    <>
      <p>Counter: {count}</p>
      <button className="bg-blue-500 text-white rounded-md p-1 border-blue-950 border-1 mr-4" onClick={handleIncrease}>Increase</button>
      <button className="bg-blue-500 text-white rounded-md p-1 border-blue-950 border-1" onClick={handleDecrease}>Decrease</button>
      <p>
        <Link href="/dashboard/about">About</Link>
      </p>

      <ul className="list-disc mt-4">
        {posts?.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </>
  );
}
