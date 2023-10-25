import { SVGProps } from "react";
const ArrowTopIcon = (props: SVGProps<SVGSVGElement>) => (
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
        d="M7.529.862 2.862 5.529a.667.667 0 0 0 .943.942l3.528-3.528v11.724a.667.667 0 1 0 1.334 0V2.943l3.528 3.528a.666.666 0 1 0 .943-.942L8.47.862a.667.667 0 0 0-.942 0Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 16V0h16v16z" />
      </clipPath>
    </defs>
  </svg>
);
export default ArrowTopIcon;
