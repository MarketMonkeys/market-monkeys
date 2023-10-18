import { SVGProps } from "react";
const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#FCFCFC"
        fillRule="evenodd"
        d="M.317 16H3.62V5.333H.317V16Zm8.584-5.6c0-1.499.69-2.393 2.013-2.393 1.215 0 1.798.858 1.798 2.394V16H16V9.247c0-2.858-1.62-4.24-3.883-4.24C9.853 5.008 8.9 6.77 8.9 6.77V5.333H5.732V16h3.169v-5.6ZM1.953 3.938a1.962 1.962 0 0 0 1.954-1.969A1.961 1.961 0 0 0 1.953 0 1.96 1.96 0 0 0 0 1.968c0 1.087.874 1.969 1.953 1.969Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default LinkedinIcon;
