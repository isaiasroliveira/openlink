import type { CSSProperties } from "react";
import type { SocialLink } from "../types/profile";
import { SocialIconView } from "./SocialIcon";

export function SocialCard({ link, index }: { link: SocialLink; index: number }) {
  return <a className="social-card" href={link.url} target="_blank" rel="noopener noreferrer"
    aria-label={`Abrir ${link.label} em uma nova aba`}
    style={{ "--delay": `${index * 90 + 320}ms` } as CSSProperties}>
    <span className="social-icon" aria-hidden="true"><SocialIconView name={link.icon} /></span>
    <span className="social-copy"><strong>{link.label}</strong>{link.caption && <small>{link.caption}</small>}</span>
    <svg className="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  </a>;
}
