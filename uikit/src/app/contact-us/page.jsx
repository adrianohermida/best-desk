import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const ContactUs = dynamic(() => import('@/views/pages/ContactUs'));

/***************************  METADATA - CONTACT US  ***************************/

export const metadata = {
  ...(SEO_CONTENT.contactUs || {
    title: 'Contact Us - SaasAble',
    description: "Get in touch with our team. We're here to help with any questions or support you need."
  })
};

/***************************  PAGE - CONTACT US  ***************************/

export default function ContactUsPage() {
  return <ContactUs />;
}
