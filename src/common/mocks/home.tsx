import AuditIcon from "@/components/Icons/AuditIcon";
import BrandIcon from "@/components/Icons/BrandIcon";
import SeoIcon from "@/components/Icons/SeoIcon";
import WebIcon from "@/components/Icons/WebIcon";

export const wordGroups = [
  {
    words: "posts#email-marketing#development#rebranding#content plan",
    colors: ["white", "orange", "white", "blue", "white"],
  },
  {
    words: "web#content writing#retarget#strategy#storytelling#mock ups",
    colors: ["green", "white", "blue", "white", "orange", "white"],
  },
  {
    words: "ppc#branding#front-end#creatives#prototyping#website#posts",
    colors: ["blue", "white", "orange", "white", "green", "white", "blue"],
  },
  {
    words: "ppc#content plan#Facebook ads#photo processing#Web development",
    colors: ["white", "orange", "green", "white", "orange"],
  },
  {
    words: "creatives#website audit#seo strategy#visual#icons#illustration",
    colors: ["white", "orange", "green", "white", "orange"],
  },
  {
    words: "audit#banners#analytics#automation tools#photo processing#web",
    colors: ["white", "green", "white", "blue", "white", "orange"],
  },
  {
    words:
      "brand identity#research#Instagram ads#mock ups#packing#posts#creatives",
    colors: ["orange", "white", "green", "white", "orange", "white", "blue"],
  },
  {
    words:
      "business#content#posts#content-marketing#visual#audit#SEO#analytics",
    colors: [
      "white",
      "blue",
      "white",
      "orange",
      "white",
      "white",
      "white",
      "white",
    ],
  },
  {
    words: "mock ups#product design#analytics#metrics#content writing",
    colors: ["green", "white", "blue", "white", "green"],
  },
  {
    words:
      "seo strategy#illustration#posts#writing#ups#brand identity#prototyping",
    colors: ["white", "orange", "white", "blue", "white", "blue", "white"],
  },
  {
    words:
      "Facebook ads#packing#creatives#stories#content#web design#development",
    colors: ["blue", "white", "white", "green", "white", "orange", "white"],
  },
  {
    words: "website#Smm#brand#writing#automation tools#content#PPC#branding",
    colors: [
      "white",
      "green",
      "white",
      "blue",
      "white",
      "blue",
      "white",
      "green",
    ],
  },
];

export const serviceSpectrum = [
  {
    icon: <SeoIcon />,
    title: "SEO",
    text: `Creating strategies, keyword writing, unique description, organic traffic, attracting customers to a specific product or service - it's all about SEO & Content.`,
  },
  {
    icon: <WebIcon />,
    title: "Website",
    text: `Developing from A to Z your unique platform that matters to your clients!`,
  },
  {
    icon: <BrandIcon />,
    title: "Branding",
    text: `We create a unique brand, thereby increasing your visibility and sales. The brand always works for you!`,
  },
  {
    icon: <AuditIcon />,
    title: "Audit",
    text: `Integration of special tools to automate marketing processes such as mailings, customer experience management, etc. And you will also know all the mistakes on the site and not only!`,
  },
];

type ServiceSpectrumImagesType = {
  [key: string]: string;
};

export const serviceSpectrumImages: ServiceSpectrumImagesType = {
  Audit: "/images/audit.svg",
  SEO: "/images/seo.svg",
  Branding: "/images/branding.svg",
  Website: "/images/website.svg",
};

export const projectPortfolioSection = [
  {
    title: "NFT Marketplace | Web3.0 Design",
    subtitle: "Our Plan of Action",
    text: "Web Design | Web Development | SEO Strategy",
    label: "Content Marketing",
    src: "/images/nft-marketplace.png",
  },
  {
    title: "Fotballer | UI/UX",
    subtitle: "Our Plan of Action",
    text: "Content-Marketing | Email-Marketing",
    label: "Prototyping",
    src: "/images/footballer.png",
  },
  {
    title: "Space Academy | Social Media",
    subtitle: "Our Plan of Action",
    text: "SMM | Key-Visual | Retarget | Facebook Ads",
    src: "/images/space-academy.png",
  },
  {
    title: "Trifecta | Document Assistant Website | UI/UX",
    subtitle: "Our Plan of Action",
    text: "SEO Strategy | PPC | Email-Marketing",
    label: "Automation Tools",
    src: "/images/trifecta.png",
  },
];
