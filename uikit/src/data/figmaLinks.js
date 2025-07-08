import { BUY_NOW_URL } from '@/path';

// Helper function to generate variant links
const generateVariants = (baseNames) => {
  return baseNames.reduce((acc, name) => {
    acc[name] = BUY_NOW_URL;
    return acc;
  }, {});
};

// Marketing section links
export const marketingFigmaLinks = {
  hero: {
    link: BUY_NOW_URL,
    variant: generateVariants([
      'hero1',
      'hero2',
      'hero3',
      'hero4',
      'hero5',
      'hero6',
      'hero7',
      'hero8',
      'hero9',
      'hero10',
      'hero11',
      'hero12',
      'hero13',
      'hero14',
      'hero15',
      'hero16',
      'hero17'
    ])
  },
  smallHero: {
    link: BUY_NOW_URL,
    variant: generateVariants(['smallHero1', 'smallHero2', 'smallHero3', 'smallHero4', 'smallHero5', 'smallHero6', 'smallHero7'])
  },
  testimonial: {
    link: BUY_NOW_URL,
    variant: generateVariants([
      'testimonial1',
      'testimonial2',
      'testimonial3',
      'testimonial4',
      'testimonial5',
      'testimonial6',
      'testimonial7',
      'testimonial8',
      'testimonial9',
      'testimonial10',
      'testimonial11',
      'testimonial12',
      'testimonial13'
    ])
  },
  team: {
    link: BUY_NOW_URL,
    variant: generateVariants(['team1', 'team2', 'team3', 'team4', 'team5', 'team6', 'team7', 'team8'])
  },
  clientele: {
    link: BUY_NOW_URL,
    variant: generateVariants(['clientele1', 'clientele2', 'clientele3', 'clientele4', 'clientele5', 'clientele6', 'clientele7'])
  },
  cta: {
    link: BUY_NOW_URL,
    variant: generateVariants(['cta1', 'cta2', 'cta3', 'cta4', 'cta5', 'cta6', 'cta7', 'cta8', 'cta9', 'cta10', 'cta11', 'cta12'])
  },
  blog: {
    link: BUY_NOW_URL,
    variant: generateVariants(['blog1', 'blog2', 'blog3', 'blog4', 'blog5', 'blog6'])
  },
  gallery: {
    link: BUY_NOW_URL,
    variant: generateVariants(['gallery1', 'gallery2', 'gallery3', 'gallery4'])
  },
  about: {
    link: BUY_NOW_URL,
    variant: generateVariants(['about1', 'about2', 'about3'])
  },
  topOffer: {
    link: BUY_NOW_URL,
    variant: generateVariants(['topOffer1', 'topOffer2', 'topOffer3', 'topOffer4', 'topOffer5'])
  },
  comingSoon: { link: BUY_NOW_URL },
  earlyAccess: { link: BUY_NOW_URL }
};

// Feature section links
export const featureFigmaLinks = {
  feature: {
    link: BUY_NOW_URL,
    variant: generateVariants([
      'feature1',
      'feature2',
      'feature3',
      'feature4',
      'feature5',
      'feature6',
      'feature7',
      'feature8',
      'feature9',
      'feature10',
      'feature11',
      'feature12',
      'feature13',
      'feature14',
      'feature15',
      'feature16',
      'feature17',
      'feature18',
      'feature19',
      'feature20',
      'feature21',
      'feature22',
      'feature23'
    ])
  },
  benefit: {
    link: BUY_NOW_URL,
    variant: generateVariants(['benefit1', 'benefit2', 'benefit3', 'benefit4', 'benefit5', 'benefit6', 'benefit7', 'benefit8', 'benefit9'])
  },
  process: {
    link: BUY_NOW_URL,
    variant: generateVariants(['process1', 'process2', 'process3', 'process4', 'process5', 'process6', 'process7'])
  },
  integration: {
    link: BUY_NOW_URL,
    variant: generateVariants([
      'integration1',
      'integration2',
      'integration3',
      'integration4',
      'integration5',
      'integration6',
      'integration7',
      'integration8'
    ])
  },
  pricing: {
    link: BUY_NOW_URL,
    variant: generateVariants(['pricing1', 'pricing2', 'pricing3', 'pricing4', 'pricing5', 'pricing6', 'pricing7', 'pricing8', 'pricing9'])
  }
};

// Essential section links
export const essentialFigmaLinks = {
  navbar: {
    link: BUY_NOW_URL,
    variant: generateVariants([
      'navbar1',
      'navbar2',
      'navbar3',
      'navbar4',
      'navbar5',
      'navbar6',
      'navbar7',
      'navbar8',
      'navbar9',
      'navbar10'
    ])
  },
  footer: {
    link: BUY_NOW_URL,
    variant: generateVariants(['footer1', 'footer2', 'footer3', 'footer4', 'footer5', 'footer6', 'footer7'])
  },
  faq: {
    link: BUY_NOW_URL,
    variant: generateVariants(['faq1', 'faq2', 'faq3', 'faq4', 'faq5', 'faq6', 'faq7'])
  },
  contactUs: {
    link: BUY_NOW_URL,
    variant: generateVariants(['contactUs1', 'contactUs2', 'contactUs3', 'contactUs4', 'contactUs5', 'contactUs6'])
  },
  megaMenu: {
    link: BUY_NOW_URL,
    variant: generateVariants(['megaMenu1', 'megaMenu2', 'megaMenu3', 'megaMenu4'])
  },
  cookie: {
    link: BUY_NOW_URL,
    variant: generateVariants(['cookie1', 'cookie2', 'cookie3'])
  },
  other: {
    link: BUY_NOW_URL,
    variant: generateVariants(['other1', 'other2', 'other3'])
  },
  onboard: { link: BUY_NOW_URL },
  privacyPolicy: { link: BUY_NOW_URL },
  termsCondition: { link: BUY_NOW_URL },
  typography: { link: BUY_NOW_URL },
  color: { link: BUY_NOW_URL },
  icon: { link: BUY_NOW_URL }
};

// Authentication section links
export const authFigmaLinks = {
  login: {
    link: BUY_NOW_URL,
    variant: generateVariants(['login1', 'login2', 'login3', 'login4', 'login5'])
  },
  register: { link: BUY_NOW_URL },
  forgotPassword: { link: BUY_NOW_URL },
  newPassword: { link: BUY_NOW_URL },
  otpVerification: { link: BUY_NOW_URL }
};

// Error page links
export const errorFigmaLinks = {
  error404: { link: BUY_NOW_URL },
  error500: { link: BUY_NOW_URL },
  underMaintenance: { link: BUY_NOW_URL }
};

// Combine all Figma links
export const FIGMA_LINK = {
  ...marketingFigmaLinks,
  ...featureFigmaLinks,
  ...essentialFigmaLinks,
  auth: authFigmaLinks,
  ...errorFigmaLinks
};

export default FIGMA_LINK;
