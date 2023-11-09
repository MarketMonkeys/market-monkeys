import { SVGProps } from 'react';
const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#FCFCFC"
      d="M6 16V8.5H4V5.8h2V3.5C6 1.7 7.2 0 9.9 0c1.1 0 1.9.1 1.9.1l-.1 2.5H10c-1 0-1.1.4-1.1 1.2v2h2.9l-.1 2.7H8.9V16H6Z"
    />
  </svg>
);
export default FacebookIcon;
