import CreateInvoiceForm from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { Suspense } from 'react';
import SpinnerLoading from '@/app/ui/spinners';

export default async function Page() {
  return (
    <main>
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
      <Suspense fallback={<SpinnerLoading />}>
        <CreateInvoiceForm />
      </Suspense>
    </main>
  );
}
