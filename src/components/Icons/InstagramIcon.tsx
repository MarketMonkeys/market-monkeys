import { SVGProps } from "react";
const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g fill="#FCFCFC" clipPath="url(#a)">
      <path d="M12.65 2.96a.389.389 0 1 0 .002.778.389.389 0 0 0-.001-.777ZM8 4.556A3.448 3.448 0 0 0 4.556 8 3.448 3.448 0 0 0 8 11.444 3.448 3.448 0 0 0 11.444 8 3.448 3.448 0 0 0 8 4.556Z" />
      <path d="M11.614 0H4.386A4.391 4.391 0 0 0 0 4.386v7.228A4.391 4.391 0 0 0 4.386 16h7.228A4.391 4.391 0 0 0 16 11.614V4.386A4.391 4.391 0 0 0 11.614 0ZM8 12.389A4.393 4.393 0 0 1 3.612 8 4.393 4.393 0 0 1 8 3.612 4.393 4.393 0 0 1 12.389 8 4.394 4.394 0 0 1 8 12.389Zm4.651-7.707a1.335 1.335 0 0 1-1.333-1.333c0-.735.598-1.333 1.333-1.333s1.333.598 1.333 1.333-.598 1.333-1.333 1.333Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default InstagramIcon;
