import { SVGProps } from 'react';
const IconError = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g fill="#F51818" clipPath="url(#a)">
      <path
        fillRule="evenodd"
        d="M8 1.23a6.77 6.77 0 1 0 0 13.54A6.77 6.77 0 0 0 8 1.23ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8 4.513c.34 0 .615.275.615.615V8.41a.615.615 0 1 1-1.23 0V5.128c0-.34.275-.615.615-.615Z"
        clipRule="evenodd"
      />
      <path d="M8.82 10.872a.82.82 0 1 1-1.64 0 .82.82 0 0 1 1.64 0Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default IconError;
