import AuditIcon from '@/components/Icons/AuditIcon';
import BrandIcon from '@/components/Icons/BrandIcon';
import SeoIcon from '@/components/Icons/SeoIcon';
import WebIcon from '@/components/Icons/WebIcon';

export const wordGroups = [
  {
    words:
      'front-end#posts#email-marketing#development#rebranding#content plan#photo processing',
    colors: ['blue', 'white', 'orange', 'white', 'blue', 'white', 'green'],
  },
  {
    words:
      'audit#banners#web#content writing#retarget#strategy#storytelling#mock ups#content plan',
    colors: [
      'orange',
      'white',
      'green',
      'white',
      'blue',
      'white',
      'orange',
      'white',
      'green',
    ],
  },
  {
    words:
      'brand identity#ppc#branding#front-end#creatives#prototyping#website#posts#prototyping',
    colors: [
      'white',
      'blue',
      'white',
      'orange',
      'white',
      'green',
      'white',
      'blue',
      'white',
    ],
  },
  {
    words:
      'content#ppc#content plan#Facebook ads#photo processing#Web development#seo',
    colors: ['blue', 'white', 'orange', 'green', 'white', 'orange', 'white'],
  },
  {
    words:
      'development#creatives#website audit#seo strategy#visual#icons#illustration#research',
    colors: ['green', 'white', 'orange', 'green', 'white', 'orange', 'white'],
  },
  {
    words:
      'strategy#audit#banners#analytics#automation tools#photo processing#web#Facebook ads',
    colors: [
      'blue',
      'white',
      'green',
      'white',
      'blue',
      'white',
      'orange',
      'white',
    ],
  },
  {
    words:
      'analytics#brand identity#research#Instagram ads#mock ups#packing#posts#creatives#website',
    colors: [
      'white',
      'orange',
      'white',
      'green',
      'white',
      'orange',
      'white',
      'blue',
      'white',
    ],
  },
  {
    words:
      'retarget#business#content#posts#content-marketing#visual#audit#SEO#analytics#packing',
    colors: [
      'green',
      'white',
      'blue',
      'white',
      'orange',
      'white',
      'white',
      'white',
      'white',
      'green',
    ],
  },
  {
    words:
      'Facebook ads#mock ups#product design#analytics#metrics#content writing#rebranding',
    colors: ['white', 'green', 'white', 'blue', 'white', 'green', 'white'],
  },
  {
    words:
      'Smm#seo strategy#illustration#posts#writing#ups#brand identity#prototyping#creatives',
    colors: [
      'green',
      'white',
      'orange',
      'white',
      'blue',
      'white',
      'blue',
      'white',
      'orange',
    ],
  },
  {
    words:
      'Facebook ads#packing#creatives#stories#content#web design#development#analytics',
    colors: [
      'blue',
      'white',
      'white',
      'green',
      'white',
      'orange',
      'white',
      'blue',
    ],
  },
  {
    words:
      'brand#website#Smm#brand#writing#automation tools#content#PPC#branding#mock ups',
    colors: [
      'orange',
      'white',
      'green',
      'white',
      'blue',
      'white',
      'blue',
      'white',
      'green',
      'white',
    ],
  },
  {
    words:
      'web#storytelling#email-marketing#rebranding#content writing#Instagram ads#front-end',
    colors: ['green', 'white', 'orange', 'white', 'green', 'white', 'blue'],
  },
  {
    words:
      'creatives#illustration#visual#automation tools#content plan#retarget#product design',
    colors: ['white', 'green', 'white', 'blue', 'white', 'orange', 'white'],
  },
  {
    words:
      'photo processing#front-end#email-marketing#development#rebranding#content plan#posts#',
    colors: ['blue', 'white', 'orange', 'white', 'blue', 'white', 'green'],
  },
  {
    words:
      'strategy#audit#banners#analytics#automation tools#photo processing#web#Facebook ads',
    colors: [
      'white',
      'orange',
      'white',
      'blue',
      'white',
      'green',
      'white',
      'blue',
    ],
  },
  {
    words:
      'mock ups#product design#Facebook ads#analytics#metrics#content writing#rebranding',
    colors: ['green', 'white', 'green', 'white', 'blue', 'white', 'white'],
  },
  {
    words:
      'storytelling#mock ups#audit#banners#web#content writing#retarget#strategy#content plan',
    colors: [
      'orange',
      'white',
      'green',
      'white',
      'blue',
      'white',
      'orange',
      'white',
      'green',
    ],
  },
];

export const serviceSpectrum = [
  {
    icon: <SeoIcon />,
    title: 'SEO',
    text: `Creating strategies, keyword writing, unique description, organic traffic, attracting customers to a specific product or service - it's all about SEO & Content.`,
  },
  {
    icon: <WebIcon />,
    title: 'Website',
    text: `Developing from A to Z your unique platform that matters to your clients!`,
  },
  {
    icon: <BrandIcon />,
    title: 'Branding',
    text: `We create a unique brand, thereby increasing your visibility and sales. The brand always works for you!`,
  },
  {
    icon: <AuditIcon />,
    title: 'Audit',
    text: `Integration of special tools to automate marketing processes such as mailings, customer experience management, etc. And you will also know all the mistakes on the site and not only!`,
  },
];

type ServiceSpectrumImagesType = {
  [key: string]: string;
};

export const serviceSpectrumImages: ServiceSpectrumImagesType = {
  Audit: '/images/audit.svg',
  SEO: '/images/seo.svg',
  Branding: '/images/branding.svg',
  Website: '/images/website.svg',
};

export const projectPortfolioSection = [
  {
    title: 'NFT Marketplace | Web3.0 Design',
    subtitle: 'Our Plan of Action',
    text: 'Web Design | Web Development | SEO Strategy',
    label: 'Content Marketing',
    src: '/images/nft-marketplace.png',
  },
  {
    title: 'Fotballer | UI/UX',
    subtitle: 'Our Plan of Action',
    text: 'Content-Marketing | Email-Marketing',
    label: 'Prototyping',
    src: '/images/footballer.png',
  },
  {
    title: 'Space Academy | Social Media',
    subtitle: 'Our Plan of Action',
    text: 'SMM | Key-Visual | Retarget | Facebook Ads',
    src: '/images/space-academy.png',
  },
  {
    title: 'Trifecta | Document Assistant Website | UI/UX',
    subtitle: 'Our Plan of Action',
    text: 'SEO Strategy | PPC | Email-Marketing',
    label: 'Automation Tools',
    src: '/images/trifecta.png',
  },
];
