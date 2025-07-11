// @next
import dynamic from 'next/dynamic';

// @project
const AdminSamplePage = dynamic(() => import('../../../views/admin/admin/sample-page'));

/***************************  ADMIN - SAMPLE PAGE  ***************************/

export default function SamplePage() {
  return <AdminSamplePage />;
}
