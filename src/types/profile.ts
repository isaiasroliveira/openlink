export type SocialIcon = "instagram" | "linkedin" | "github";

export interface SocialLink {
  label: string;
  url: `https://${string}`;
  icon: SocialIcon;
  caption?: string;
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  location: string;
  tag?: string | null;
  links: SocialLink[];
}
