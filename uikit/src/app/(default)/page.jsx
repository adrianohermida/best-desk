'use client';

// @next
import dynamic from 'next/dynamic';

// @project
// Optimized dynamic imports with better loading states
const ScrollFab = dynamic(() => import('@/components/ScrollFab'), {
  ssr: false,
  loading: () => null
});

const Main = dynamic(() => import('@/views/landings/default'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>
});

const ThemeAI = dynamic(() => import('@/views/landings/ai/theme'), {
  ssr: false
});

/***************************  PAGE - ROOT  ***************************/

export default function HomePage() {
  return (
    <ThemeAI>
      <>
        <Main />
        <ScrollFab />
      </>
    </ThemeAI>
  );
}
