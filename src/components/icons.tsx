import type { LucideProps } from "lucide-react";

export const Icons = {
  logo: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17 6.09a5.79 5.79 0 0 0-10 0" />
      <path d="M17 17.91a5.79 5.79 0 0 1-10 0" />
      <path d="M7 6.09a5.79 5.79 0 0 1 10 0" />
      <path d="M7 17.91a5.79 5.79 0 0 0 10 0" />
      <path d="M7 12h10" />
    </svg>
  ),
};
