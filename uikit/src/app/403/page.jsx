import dynamic from 'next/dynamic';

const Error403View = dynamic(() => import('@/views/errors/Error403'));

/***************************  METADATA - 403  ***************************/

export const metadata = {
  title: 'Access Forbidden - 403',
  description: 'You do not have permission to access this resource.'
};

/***************************  PAGE - 403 FORBIDDEN  ***************************/

export default function ForbiddenPage() {
  return <Error403View />;
}
