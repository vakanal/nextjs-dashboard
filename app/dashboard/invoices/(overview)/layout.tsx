'use client';

import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment();

  return (
    <main>
      {segment === 'create' ? (
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Invoices', href: '/dashboard/invoices' },
            {
              label: 'Create Invoice',
              href: '/dashboard/invoices/create',
              active: true,
            },
          ]}
        />
      ) : (
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Invoices', href: '/dashboard/invoices' },
            {
              label: 'Edit Invoice',
              href: `/dashboard/invoices/${segment}/edit`,
              active: true,
            },
          ]}
        />
      )}
      <>{children}</>
    </main>
  );
}
