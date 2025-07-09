'use client';
import { Suspense } from 'react';

// @next
import dynamic from 'next/dynamic';

// @project
import { Feature20 } from '@/blocks/feature';
import { Hero17 } from '@/blocks/hero';
import LazySection from '@/components/LazySection';
import SimpleOptimizedLoader from '@/components/SimpleOptimizedLoader';
import useDataThemeMode from '@/hooks/useDataThemeMode';

// Lazy load otimizado do ScrollFab
const ScrollFab = dynamic(() => import('@/components/ScrollFab'), {
  ssr: false,
  loading: () => null
});

// @data
import {
  benefit,
  clientele,
  cta4,
  cta5,
  faq,
  feature20,
  feature21,
  feature18,
  hero,
  integration,
  other,
  pricing,
  testimonial
} from './data';

/**
 * Página principal otimizada para carregamento rápido
 */
export default function FastMain() {
  useDataThemeMode();

  return (
    <>
      {/* Above the fold - Carregamento imediato com Suspense */}
      <Suspense fallback={<SimpleOptimizedLoader fullHeight />}>
        <Hero17 {...hero} />
      </Suspense>

      <Suspense fallback={<SimpleOptimizedLoader />}>
        <Feature20 {...feature20} />
      </Suspense>

      {/* Primeira seção lazy - offset menor para carregamento mais rápido */}
      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/benefit').then((module) => ({ default: module.Benefit5 })), props: benefit },
          { importFunc: () => import('@/blocks/integration').then((module) => ({ default: module.Integration2 })), props: integration }
        ]}
        offset="50px"
        placeholderHeight={300}
        fallback={<SimpleOptimizedLoader />}
      />

      {/* Segunda seção lazy */}
      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/feature').then((module) => ({ default: module.Feature18 })), props: feature18 },
          { importFunc: () => import('@/blocks/other').then((module) => ({ default: module.Other1 })), props: other }
        ]}
        offset="100px"
        placeholderHeight={400}
        fallback={<SimpleOptimizedLoader />}
      />

      {/* Terceira seção lazy */}
      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/feature').then((module) => ({ default: module.Feature21 })), props: feature21 },
          { importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.Cta4 })), props: cta4 }
        ]}
        offset="150px"
        placeholderHeight={350}
        fallback={<SimpleOptimizedLoader />}
      />

      {/* Quarta seção lazy - testimonial e clientele */}
      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/testimonial').then((module) => ({ default: module.Testimonial10 })), props: testimonial },
          { importFunc: () => import('@/blocks/clientele').then((module) => ({ default: module.Clientele3 })), props: clientele }
        ]}
        offset="200px"
        placeholderHeight={400}
        fallback={<SimpleOptimizedLoader />}
      />

      {/* Quinta seção lazy - pricing e FAQ */}
      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/pricing').then((module) => ({ default: module.Pricing9 })), props: pricing },
          { importFunc: () => import('@/blocks/faq').then((module) => ({ default: module.Faq6 })), props: faq }
        ]}
        offset="250px"
        placeholderHeight={500}
        fallback={<SimpleOptimizedLoader />}
      />

      {/* Última seção lazy - CTA final */}
      <LazySection
        sections={[{ importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.Cta5 })), props: cta5 }]}
        offset="300px"
        placeholderHeight={200}
        fallback={<SimpleOptimizedLoader />}
      />

      {/* ScrollFab - carregado por último */}
      <ScrollFab />
    </>
  );
}
