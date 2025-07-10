'use client';

// @project
import { Benefit5 } from '@/blocks/benefit';
import { Clientele3 } from '@/blocks/clientele';
import { Cta4, Cta5 } from '@/blocks/cta';
import { Faq6 } from '@/blocks/faq';
import { Feature18, Feature20, Feature21 } from '@/blocks/feature';
import { Hero17 } from '@/blocks/hero';
import { Integration2 } from '@/blocks/integration';
import { Other1 } from '@/blocks/other';
import { Pricing9 } from '@/blocks/pricing';
import { Testimonial10 } from '@/blocks/testimonial';
import useDataThemeMode from '@/hooks/useDataThemeMode';

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

/***************************  PAGE - MAIN (ORIGINAL NO LAZY)  ***************************/

export default function Main() {
  useDataThemeMode();

  return (
    <>
      {/* Hero Section */}
      <Hero17 {...hero} />

      {/* Feature Section */}
      <Feature20 {...feature20} />

      {/* Benefit Section */}
      <Benefit5 {...benefit} />

      {/* Integration Section */}
      <Integration2 {...integration} />

      {/* Other Section */}
      <Other1 {...other} />

      {/* Feature 18 */}
      <Feature18 {...feature18} />

      {/* Feature 21 */}
      <Feature21 {...feature21} />

      {/* CTA 4 */}
      <Cta4 {...cta4} />

      {/* Testimonial */}
      <Testimonial10 {...testimonial} />

      {/* Clientele */}
      <Clientele3 {...clientele} />

      {/* Pricing */}
      <Pricing9 {...pricing} />

      {/* CTA 5 */}
      <Cta5 {...cta5} />

      {/* FAQ */}
      <Faq6 {...faq} />
    </>
  );
}
