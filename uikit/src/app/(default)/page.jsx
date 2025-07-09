// @next
import dynamic from 'next/dynamic';

// @project - Versão otimizada para melhor carregamento
const Main = dynamic(() => import('@/views/landings/default/OptimizedMain'), {
  loading: () => (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Loading...
    </div>
  )
});

/***************************  PAGE - ROOT  ***************************/

export default function HomePage() {
  return <Main />;
}
