import { fetchCustomers } from '@/app/lib/data';
import CreateInvoiceForm from '@/app/ui/invoices/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Invoice',
};

export default async function Page() {
  const customers = await fetchCustomers();

  return <CreateInvoiceForm customers={customers} />;
}
