import SeoIcon from '@/components/Icons/SeoIcon';
import WebIcon from '@/components/Icons/WebIcon';

export const FULL_PROJECTS_INFO = [
  {
    id: 'afa7caa1-dd75-4765-9248-d4d8c4e5455e',
    mainImage: '/images/projects/le-syndicat/case-bg.png',
    label: 'Le SynDicat Bar',
    title: 'Le Syndicat | Bar website | UI/UX design',
    year: 2022,
    info: [
      "In this transformative web design case, we took on the challenge of revitalizing a client's online presence. The client, a dynamic e-commerce brand, sought to enhance user engagement and improve conversion rates.",
      "The result was a visually captivating and user-friendly website that not only met but exceeded the client's expectations. Through a seamless blend of responsive design, intuitive navigation, and compelling visuals.",
    ],
    actions: {
      title: 'Our Plan of Action',
      values: {
        SEO: 'SEO Strategy | PPC | Email-Marketing',
        Audit: 'Automation Tools',
      },
    },
    images: [
      [
        {
          src: '/images/projects/le-syndicat/LeSyndicat_1.png',
          width: 384,
          height: 330,
        },
        {
          src: '/images/projects/le-syndicat/LeSyndicat_2.png',
          width: 384,
          height: 330,
        },
        {
          src: '/images/projects/le-syndicat/LeSyndicat_3.png',
          width: 384,
          height: 330,
        },
      ],
      [
        {
          src: '/images/projects/le-syndicat/LeSyndicat_4.png',
          width: 1200,
          height: 670,
        },
      ],
      [
        {
          src: '/images/projects/le-syndicat/LeSyndicat_5.png',
          width: 588,
          height: 330,
        },
        {
          src: '/images/projects/le-syndicat/LeSyndicat_6.png',
          width: 588,
          height: 330,
        },
      ],
    ],
    keyOutcomes: [
      {
        title: "Client's Request",
        content:
          'Create a website for a business to increase the flow of customers as well as enhance the media image. Make adaptive versions of the site for maximum reach with further implementation. Plus create a visual concept for social media to match the new look of the site.',
        icon: <SeoIcon />,
      },
      {
        title: 'Our Result',
        content:
          "We have now brought the bar's website to life, with a captivating design that encapsulates our bar's character. The website not only showcases our menu and services but also provides a seamless and engaging online experience for our customers.",
        icon: <WebIcon />,
      },
    ],
  },
];
