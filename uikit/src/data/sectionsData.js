// @project
import { PAGE_PATH } from '@/path';

export const SectionCategory = {
  ESSENTIAL: 'essential',
  MARKETING: 'marketing',
  FEATURE: 'feature'
};

const imagePrefix = '/assets/images/presentation';

export const sections = [
  {
    title: 'Nav Bar',
    subTitle: '10 Different Variants',
    image: `${imagePrefix}/navbar-light.svg`,
    link: PAGE_PATH.navbar,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Hero',
    subTitle: '17 Different Variants',
    image: `${imagePrefix}/hero-light.svg`,
    link: PAGE_PATH.hero,
    category: SectionCategory.MARKETING
  },
  {
    title: 'Clientele',
    subTitle: '7 Different Variants',
    image: `${imagePrefix}/clientele-light.svg`,
    link: PAGE_PATH.clientele,
    category: SectionCategory.MARKETING
  },
  {
    title: 'Benefits',
    subTitle: '9 Different Variants',
    image: `${imagePrefix}/benefits-light.svg`,
    link: PAGE_PATH.benefit,
    category: SectionCategory.FEATURE
  },
  {
    title: 'Feature',
    subTitle: '23 Different Variants',
    image: `${imagePrefix}/feature-light.svg`,
    link: PAGE_PATH.feature,
    category: SectionCategory.FEATURE
  },
  {
    title: 'Process',
    subTitle: '7 Different Variants',
    image: `${imagePrefix}/process-light.svg`,
    link: PAGE_PATH.process,
    category: SectionCategory.FEATURE
  },
  {
    title: 'Integration',
    subTitle: '8 Different Variants',
    image: `${imagePrefix}/integration-light.svg`,
    link: PAGE_PATH.integration,
    category: SectionCategory.FEATURE
  },
  {
    title: 'Testimonial',
    subTitle: '11 Different Variants',
    image: `${imagePrefix}/testimonial-light.svg`,
    link: PAGE_PATH.testimonial,
    category: SectionCategory.MARKETING
  },
  {
    title: 'Call-To-Action',
    subTitle: '12 Different Variants',
    image: `${imagePrefix}/cta-light.svg`,
    link: PAGE_PATH.cta,
    category: SectionCategory.MARKETING
  },
  {
    title: 'Blog',
    subTitle: '6 Different Variants',
    image: `${imagePrefix}/blog-light.svg`,
    link: PAGE_PATH.blog,
    category: SectionCategory.MARKETING
  },
  {
    title: 'FAQs',
    subTitle: '7 Different Variants',
    image: `${imagePrefix}/faqs-light.svg`,
    link: PAGE_PATH.faq,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Footer',
    subTitle: '7 Different Variants',
    image: `${imagePrefix}/footer-light.svg`,
    link: PAGE_PATH.footer,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Team',
    subTitle: '8 Different Variants',
    image: `${imagePrefix}/team-light.svg`,
    link: PAGE_PATH.team,
    category: SectionCategory.MARKETING
  },
  {
    title: 'Contact Us',
    subTitle: '6 Different Variants',
    image: `${imagePrefix}/contact-us-light.svg`,
    link: PAGE_PATH.contactUs,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Gallery',
    subTitle: '4 Different Variants',
    image: `${imagePrefix}/gallery-light.svg`,
    link: PAGE_PATH.gallery,
    category: SectionCategory.MARKETING
  },
  {
    title: 'Login',
    subTitle: '5 Different Variants',
    image: `${imagePrefix}/sign-in-light.svg`,
    link: PAGE_PATH.login,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Register',
    subTitle: '1 Variants',
    image: `${imagePrefix}/sign-up-light.svg`,
    link: PAGE_PATH.register,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Pricing',
    subTitle: '9 Different Variants',
    image: `${imagePrefix}/pricing-light.svg`,
    link: PAGE_PATH.pricing,
    category: SectionCategory.FEATURE
  },
  {
    title: 'Small Hero',
    subTitle: '7 Different Variants',
    image: `${imagePrefix}/small-hero-light.svg`,
    link: PAGE_PATH.smallHero,
    category: SectionCategory.MARKETING
  },
  {
    title: 'Cookies',
    subTitle: '3 Different Variants',
    image: `${imagePrefix}/cookies-light.svg`,
    link: PAGE_PATH.cookie,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Top-Offer',
    subTitle: '5 Different Variants',
    image: `${imagePrefix}/top-offer-bar-light.svg`,
    link: PAGE_PATH.topOffer,
    category: SectionCategory.MARKETING
  },
  {
    title: 'Mega Menu',
    subTitle: '4 Different Variants',
    image: `${imagePrefix}/mega-menu-light.svg`,
    link: PAGE_PATH.megaMenu,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'About',
    subTitle: '3 Different Variants',
    image: `${imagePrefix}/content-light.svg`,
    link: PAGE_PATH.about,
    category: SectionCategory.MARKETING
  },
  {
    title: 'Forgot Password',
    subTitle: '1 Variants',
    image: `${imagePrefix}/forgot-pass-light.svg`,
    link: PAGE_PATH.forgotPassword,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Create New Password',
    subTitle: '1 Variants',
    image: `${imagePrefix}/new-pass-light.svg`,
    link: PAGE_PATH.newPassword,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'OTP Verification',
    subTitle: '1 Variants',
    image: `${imagePrefix}/otp-gen-light.svg`,
    link: PAGE_PATH.otpVerification,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: '404 Error',
    subTitle: '1 Variant',
    image: `${imagePrefix}/404-light.svg`,
    link: PAGE_PATH.error404,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: '500 Error',
    subTitle: '1 Variant',
    image: `${imagePrefix}/500-light.svg`,
    link: PAGE_PATH.error500,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Under Maintenance',
    subTitle: '1 Variant',
    image: `${imagePrefix}/maintenance-light.svg`,
    link: PAGE_PATH.underMaintenance,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Coming Soon',
    subTitle: '1 Variant',
    image: `${imagePrefix}/coming-soon-light.svg`,
    link: PAGE_PATH.comingSoon,
    category: SectionCategory.MARKETING
  },
  {
    title: 'Early Access',
    subTitle: '1 Variant',
    image: `${imagePrefix}/early-access-light.svg`,
    link: PAGE_PATH.earlyAccess,
    category: SectionCategory.MARKETING
  },
  {
    title: 'Onboard',
    subTitle: '1 Variant',
    image: `${imagePrefix}/onboard-light.svg`,
    link: PAGE_PATH.onboard,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Other',
    subTitle: '3 Different Variants',
    image: `${imagePrefix}/other-light.svg`,
    link: PAGE_PATH.other,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Privacy Policy',
    subTitle: '1 Variant',
    image: `${imagePrefix}/privacy-policy-light.svg`,
    link: PAGE_PATH.privacyPolicy,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Terms Conditions',
    subTitle: '1 Variant',
    image: `${imagePrefix}/privacy-policy-light.svg`,
    link: PAGE_PATH.termsCondition,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Typography',
    subTitle: '1 Variant',
    image: `${imagePrefix}/typography-light.svg`,
    link: PAGE_PATH.typography,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Color',
    subTitle: '1 Variant',
    image: `${imagePrefix}/color-light.svg`,
    link: PAGE_PATH.color,
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Icons',
    subTitle: '1 Variant',
    image: `${imagePrefix}/icon-light.svg`,
    link: PAGE_PATH.icon,
    category: SectionCategory.ESSENTIAL
  }
];

export const filterList = [
  { title: 'All Section', value: '' },
  { title: 'Marketing', value: SectionCategory.MARKETING },
  { title: 'Feature', value: SectionCategory.FEATURE },
  { title: 'Essential', value: SectionCategory.ESSENTIAL }
];
