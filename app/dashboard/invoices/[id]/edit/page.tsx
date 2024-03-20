import EditInvoiceForm from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { Suspense } from 'react';
import SpinnerLoading from '@/app/ui/spinners';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Suspense fallback={<SpinnerLoading />}>
        <EditInvoiceForm id={id} />
      </Suspense>
    </main>
  );
}
