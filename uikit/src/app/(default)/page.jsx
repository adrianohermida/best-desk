// @next
import dynamic from 'next/dynamic';

// @project
const Main = dynamic(() => import('@/views/landings/default'));

/***************************  PAGE - ROOT  ***************************/

export default function HomePage() {
  return <Main />;
}
