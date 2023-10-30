import { SVGProps } from "react";
const ArrowUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={9}
    fill="none"
    {...props}
  >
    <path
      fill="#FCFCFC"
      d="M8 0c.287 0 .573.108.792.324l6.88 6.789a1.095 1.095 0 0 1 0 1.563 1.131 1.131 0 0 1-1.585 0L8 2.67 1.913 8.676a1.131 1.131 0 0 1-1.585 0 1.095 1.095 0 0 1 0-1.564L7.208.323C7.427.108 7.713 0 8 0Z"
    />
  </svg>
);
export default ArrowUpIcon;
