import { SVGProps } from 'react';
const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={9}
    fill="none"
    {...props}
  >
    <path
      fill="#0A0A0A"
      d="M8 9c-.287 0-.574-.108-.792-.324L.328 1.887a1.095 1.095 0 0 1 0-1.563 1.131 1.131 0 0 1 1.585 0L8 6.33 14.087.324a1.131 1.131 0 0 1 1.585 0 1.095 1.095 0 0 1 0 1.564l-6.88 6.789A1.125 1.125 0 0 1 8 9Z"
    />
  </svg>
);
export default ArrowDownIcon;
