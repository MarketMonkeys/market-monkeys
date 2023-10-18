import { SVGProps } from "react";

const EmailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18.081 13.195a3.064 3.064 0 0 1-3.06 3.06H4.979a3.064 3.064 0 0 1-3.06-3.06v-6.39c0-.563.154-1.093.422-1.547l4.9 4.9a3.871 3.871 0 0 0 2.76 1.14 3.87 3.87 0 0 0 2.758-1.14l4.9-4.9c.268.454.422.984.422 1.547v6.39Zm-3.06-9.45H4.979a3.05 3.05 0 0 0-1.854.628l4.95 4.95c.511.51 1.195.794 1.926.794a2.71 2.71 0 0 0 1.925-.793l4.949-4.951a3.05 3.05 0 0 0-1.854-.628Zm0-1.181H4.979A4.247 4.247 0 0 0 .738 6.805v6.39a4.246 4.246 0 0 0 4.241 4.241h10.042a4.246 4.246 0 0 0 4.241-4.241v-6.39a4.247 4.247 0 0 0-4.241-4.241Z"
      clipRule="evenodd"
    />
  </svg>
);
export default EmailIcon;
