import { redirect } from 'next/navigation';

/***************************  PAGE - SETTINGS  ***************************/

export default function SettingsPage() {
  // Redirect to admin settings since we have a full admin panel
  redirect('/admin/settings');
}
