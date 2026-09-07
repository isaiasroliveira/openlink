import type { ReactElement } from "react";
import type { SocialIcon } from "../types/profile";

const icons: Record<SocialIcon, ReactElement> = {
instagram: (<svg viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="5"></rect>
      <circle cx="12" cy="12" r="4"></circle>
      <circle cx="17.4" cy="6.7" r="1" className="icon-fill"></circle>
    </svg>),
linkedin: (<svg viewBox="0 0 24 24">
      <path d="M6.5 9.5V18M6.5 6.2v.1M10.5 18v-8.5M10.5 13.2c.7-2.2 6-3 6 1V18"></path>
    </svg>),
github: (<svg viewBox="0 0 24 24">
      <path d="M15.5 21v-3.5c0-1 .1-1.4-.5-2 3.2-.4 6.5-1.6 6.5-7A5.5 5.5 0 0 0 20 4.7c.2-.9.1-2-.3-2.8 0 0-1.2-.4-3.8 1.4a13 13 0 0 0-7 0C6.3 1.5 5.1 2 5.1 2a6 6 0 0 0-.2 2.8 5.5 5.5 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.5 7-.5.5-.6 1.1-.6 2V21"></path>
      <path d="M9.3 18.5c-3 .9-3-1.5-4.2-2"></path>
    </svg>)
};

export function SocialIconView({ name }: { name: SocialIcon }) {
  return icons[name];
}
