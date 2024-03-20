'use client';

import { BarLoader } from 'react-spinners';

export default function SpinnerLoading() {
  return (
    <div className="flex h-full items-center justify-center">
      <BarLoader
        height={10}
        width={200}
        color="rgba(47, 111, 235, 1)"
        loading={true}
        speedMultiplier={1}
      />
    </div>
  );
}
