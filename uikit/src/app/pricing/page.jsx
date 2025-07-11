import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const Pricing = dynamic(() => import('@/views/pages/Pricing'));

/***************************  METADATA - PRICING  ***************************/

export const metadata = {
  ...(SEO_CONTENT.pricing || {
    title: 'Pricing - SaasAble',
    description: 'Choose the perfect plan for your needs. Affordable pricing for individuals and teams.'
  })
};

/***************************  PAGE - PRICING  ***************************/

export default function PricingPage() {
  return <Pricing />;
}
