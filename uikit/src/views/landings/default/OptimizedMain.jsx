'use client';
import { Suspense, useMemo } from 'react';

// @next
import dynamic from 'next/dynamic';

// @project
import { Feature20 } from '@/blocks/feature';
import { Hero17 } from '@/blocks/hero';
import OptimizedLazySection from '@/components/OptimizedLazySection';
import OptimizedLoader from '@/components/OptimizedLoader';
import useDataThemeMode from '@/hooks/useDataThemeMode';

// Lazy load do ScrollFab
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
 * Página principal otimizada com carregamento estratégico
 */
export default function OptimizedMain() {
  useDataThemeMode();

  // Configuração de seções por prioridade
  const sectionConfig = useMemo(
    () => ({
      // Seções críticas (above the fold)
      critical: [
        { importFunc: () => import('@/blocks/benefit').then((module) => ({ default: module.Benefit5 })), props: benefit },
        { importFunc: () => import('@/blocks/integration').then((module) => ({ default: module.Integration2 })), props: integration }
      ],

      // Seções importantes (second fold)
      important: [
        { importFunc: () => import('@/blocks/feature').then((module) => ({ default: module.Feature18 })), props: feature18 },
        { importFunc: () => import('@/blocks/feature').then((module) => ({ default: module.Feature21 })), props: feature21 },
        { importFunc: () => import('@/blocks/other').then((module) => ({ default: module.Other1 })), props: other }
      ],

      // Seções de engajamento (third fold)
      engagement: [
        { importFunc: () => import('@/blocks/testimonial').then((module) => ({ default: module.Testimonial10 })), props: testimonial },
        { importFunc: () => import('@/blocks/clientele').then((module) => ({ default: module.Clientele3 })), props: clientele },
        { importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.Cta4 })), props: cta4 }
      ],

      // Seções de conversão (bottom fold)
      conversion: [
        { importFunc: () => import('@/blocks/pricing').then((module) => ({ default: module.Pricing9 })), props: pricing },
        { importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.Cta5 })), props: cta5 },
        { importFunc: () => import('@/blocks/faq').then((module) => ({ default: module.Faq6 })), props: faq }
      ]
    }),
    []
  );

  return (
    <>
      {/* Above the fold - Carregamento imediato */}
      <Suspense fallback={<OptimizedLoader fullHeight showLogo />}>
        <Hero17 {...hero} />
      </Suspense>

      <Suspense fallback={<OptimizedLoader />}>
        <Feature20 {...feature20} />
      </Suspense>

      {/* Seções críticas - Carregamento paralelo com skeleton */}
      <OptimizedLazySection
        sections={sectionConfig.critical}
        offset="100px"
        placeholderHeight={400}
        enableSkeleton={true}
        fadeTransition={true}
        loadingStrategy="parallel"
      />

      {/* Seções importantes - Carregamento sequencial para melhor UX */}
      <OptimizedLazySection
        sections={sectionConfig.important}
        offset="150px"
        placeholderHeight={600}
        enableSkeleton={true}
        fadeTransition={true}
        loadingStrategy="sequential"
      />

      {/* Seções de engajamento - Carregamento paralelo otimizado */}
      <OptimizedLazySection
        sections={sectionConfig.engagement}
        offset="200px"
        placeholderHeight={500}
        enableSkeleton={true}
        fadeTransition={true}
        loadingStrategy="parallel"
      />

      {/* Seções de conversão - Carregamento sob demanda */}
      <OptimizedLazySection
        sections={sectionConfig.conversion}
        offset="250px"
        placeholderHeight={700}
        enableSkeleton={true}
        fadeTransition={true}
        loadingStrategy="sequential"
      />

      {/* ScrollFab - Carregamento lazy sem bloquear */}
      <ScrollFab />
    </>
  );
}
