import { redirect } from 'next/navigation';

/***************************  PAGE - DASHBOARD  ***************************/

export default function DashboardPage() {
  // Redirect to admin dashboard since we have a full admin panel
  redirect('/admin/dashboard');
}
