import dynamic from 'next/dynamic';

// @project
import { SEO_CONTENT } from '@/metadata';

const Career = dynamic(() => import('@/views/pages/Career'));

/***************************  METADATA - CAREER  ***************************/

export const metadata = {
  ...(SEO_CONTENT.career || {
    title: 'Career - SaasAble',
    description: 'Join our team and build amazing products together.'
  })
};

/***************************  PAGE - CAREER  ***************************/

export default function CareerPage() {
  return <Career />;
}
