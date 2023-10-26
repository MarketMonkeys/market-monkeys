import * as React from "react";
import { SVGProps } from "react";
const ScrollIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path
      fill="#FCFCFC"
      fillRule="evenodd"
      d="M6.177 3.467A6.82 6.82 0 0 1 17.82 8.29v5.28a6.82 6.82 0 1 1-13.64 0V8.29a6.82 6.82 0 0 1 1.997-4.822ZM11 2.789a5.5 5.5 0 0 0-5.5 5.5v5.28a5.5 5.5 0 0 0 11 0V8.29a5.5 5.5 0 0 0-5.5-5.5Z"
      clipRule="evenodd"
    />
    <path
      fill="#FCFCFC"
      fillRule="evenodd"
      d="M11 4.99a.66.66 0 0 1 .66.66v7.04a.66.66 0 0 1-1.32 0V5.65a.66.66 0 0 1 .66-.66Z"
      clipRule="evenodd"
    />
    <path
      fill="#FCFCFC"
      fillRule="evenodd"
      d="M7.894 9.583a.66.66 0 0 1 .933 0L11 11.756l2.174-2.173a.66.66 0 1 1 .933.933l-2.64 2.64a.66.66 0 0 1-.934 0l-2.64-2.64a.66.66 0 0 1 0-.933Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ScrollIcon;
