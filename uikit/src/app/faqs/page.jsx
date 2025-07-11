import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const Faqs = dynamic(() => import('@/views/pages/Faqs'));

/***************************  METADATA - FAQS  ***************************/

export const metadata = {
  ...(SEO_CONTENT.faqs || {
    title: 'FAQs - SaasAble',
    description: 'Frequently asked questions about SaasAble UI components and templates.'
  })
};

/***************************  PAGE - FAQS  ***************************/

export default function FaqsPage() {
  return <Faqs />;
}
