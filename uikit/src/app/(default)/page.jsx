// @next
import dynamic from 'next/dynamic';

// @project - Versão rápida para melhor carregamento
const Main = dynamic(() => import('@/views/landings/default/FastMain'), {
  loading: () => (
    <div
      style={{
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        color: '#666'
      }}
    >
      Loading page...
    </div>
  )
});

/***************************  PAGE - ROOT  ***************************/

export default function HomePage() {
  return <Main />;
}
