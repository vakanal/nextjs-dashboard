'use client';

import type { MouseEvent } from 'react';
import Link from 'next/link';
import { useCount, useDispatchCount } from '@/app/providers/context';

const Page = () => {
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
      <h1>SPECIAL</h1>
      <p>Counter: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <p>
        <Link href="/dashboard/about">About</Link>
      </p>
    </>
  );
};

export default Page;
