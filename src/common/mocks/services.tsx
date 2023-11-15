import BrandIcon from '@/components/Icons/BrandIcon';
import WebIcon from '@/components/Icons/WebIcon';
import AuditIcon from '@/components/Icons/AuditIcon';

export const MARKETING_SOLUTIONS = [
  {
    title: 'Seo',
    text: "Creating strategies, keyword writing, unique description, organic traffic, attracting customers to a specific product or service - it's all about SEO & Content.",
    tags: [
      'SEO Strategy',
      'Content-Marketing',
      'Email-Marketing',
      'Content Writing',
      'PPC',
    ],
    tagColor: 'blue',
    src: '/images/services/seo.png',
  },
  {
    title: 'Website',
    text: 'Developing from A to Z your unique platform that matters to your clients!',
    tags: [
      'Web Design',
      'Web Development',
      'UX/UI',
      'Prototyping',
      'Analytics and Metrics',
      'Mock Ups',
    ],
    tagColor: 'orange',
    src: '/images/services/website.png',
  },
  {
    title: 'Branding',
    text: 'We create a unique brand, thereby increasing your visibility and sales. The brand always works for you!',
    tags: [
      'SMM',
      'Retarget',
      'Rebranding',
      'Facebook Ads',
      'Key-Visual',
      'Packing',
      'Product Design',
      'LOGO',
    ],
    tagColor: 'green',
    src: '/images/services/branding.png',
  },
  {
    title: 'Audit',
    text: 'Integration of special tools to automate marketing processes such as mailings, customer experience management, etc. And you will also know all the mistakes on the site and not only!',
    tags: ['Website Audit', 'Automation Tools'],
    tagColor: 'orange',
    src: '/images/services/audit.png',
  },
];

export const WORKFLOW_STAGES = [
  {
    icon: <BrandIcon />,
    title: 'Creating of concept',
    text: 'During this phase, we brainstorm ideas, gather inspiration, and conceptualize the creative direction for your project.',
  },
  {
    icon: <WebIcon />,
    title: 'Design and Prototyping',
    text: 'We translate concepts into visual designs, create prototypes, and refine them until we achieve the desired look and feel.',
  },
  {
    icon: <AuditIcon />,
    title: 'Development and Production',
    text: 'During this phase, we brainstorm ideas, gather inspiration, and conceptualize the creative direction for your project.',
  },
];
