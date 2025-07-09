import { lazy } from 'react';

// Hero Blocks - Lazy Loading
export const LazyHeroBlocks = {
  Hero17: lazy(() => import('./hero/LazyHero17.jsx'))
};

// Feature Blocks - Components com animações
export const LazyFeatureBlocks = {
  Feature18: lazy(() => import('./feature/Feature18.jsx')),
  Feature20: lazy(() => import('./feature/Feature20.jsx')),
  Feature21: lazy(() => import('./feature/Feature21.jsx'))
};

// Clientele Blocks - Sliders
export const LazyClienteleBlocks = {
  Clientele3: lazy(() => import('./clientele/LazyClientele3.jsx'))
};

// FAQ Blocks - Interactive components
export const LazyFaqBlocks = {
  Faq6: lazy(() => import('./faq/LazyFaq6.jsx'))
};

// Pricing Blocks - Heavy components
export const LazyPricingBlocks = {
  Pricing9: lazy(() => import('./pricing/Pricing9.jsx'))
};

// CTA Blocks - Animated components
export const LazyCtaBlocks = {
  Cta4: lazy(() => import('./cta/Cta4.jsx')),
  Cta5: lazy(() => import('./cta/Cta5.jsx'))
};

// Contact Blocks - Form components
export const LazyContactBlocks = {
  ContactUs4: lazy(() => import('./contact-us/ContactUs4.jsx'))
};

// Integration Blocks
export const LazyIntegrationBlocks = {
  Integration2: lazy(() => import('./integration/Integration2.jsx'))
};

// Benefit Blocks
export const LazyBenefitBlocks = {
  Benefit5: lazy(() => import('./benefit/Benefit5.jsx'))
};

// Footer Blocks
export const LazyFooterBlocks = {
  Footer7: lazy(() => import('./footer/Footer7.jsx'))
};

// Other Blocks
export const LazyOtherBlocks = {
  Other1: lazy(() => import('./other/Other1.jsx')),
  Other2: lazy(() => import('./other/Other2.jsx'))
};

// Mapa completo de componentes lazy
export const LazyBlocksMap = {
  // Hero components
  Hero17: LazyHeroBlocks.Hero17,

  // Feature components
  Feature18: LazyFeatureBlocks.Feature18,
  Feature20: LazyFeatureBlocks.Feature20,
  Feature21: LazyFeatureBlocks.Feature21,

  // Clientele components
  Clientele3: LazyClienteleBlocks.Clientele3,

  // FAQ components
  Faq6: LazyFaqBlocks.Faq6,

  // Pricing components
  Pricing9: LazyPricingBlocks.Pricing9,

  // CTA components
  Cta4: LazyCtaBlocks.Cta4,
  Cta5: LazyCtaBlocks.Cta5,

  // Contact components
  ContactUs4: LazyContactBlocks.ContactUs4,

  // Integration components
  Integration2: LazyIntegrationBlocks.Integration2,

  // Benefit components
  Benefit5: LazyBenefitBlocks.Benefit5,

  // Footer components
  Footer7: LazyFooterBlocks.Footer7,

  // Other components
  Other1: LazyOtherBlocks.Other1,
  Other2: LazyOtherBlocks.Other2
};

// Preload de componentes críticos
export const preloadCriticalBlocks = () => {
  if (typeof window !== 'undefined') {
    // Preload componentes mais usados
    import('./hero/LazyHero17.jsx');
    import('./clientele/LazyClientele3.jsx');
    import('./faq/LazyFaq6.jsx');
  }
};

// Função helper para obter componente lazy
export const getLazyBlock = (blockName) => {
  return LazyBlocksMap[blockName] || null;
};

export default LazyBlocksMap;
