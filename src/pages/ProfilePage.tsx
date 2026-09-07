import { useEffect, useRef, useState } from "react";
import { profile } from "../config/profile";
import type { Profile } from "../types/profile";
import { SocialCard } from "../components/SocialCard";

export function ProfilePage({ data = profile }: { data?: Profile }) {
  const [message, setMessage] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [firstName, ...lastName] = data.name.trim().split(/\s+/);
  const initials = data.name.trim().split(/\s+/).map(part => part[0]).filter(Boolean);
  const monogram = initials.length > 1 ? initials[0] + initials[initials.length - 1] : initials[0];
  const tag = data.tag?.trim();

  useEffect(() => {
    document.title = `${data.name} | Links`;
    return () => clearTimeout(timer.current);
  }, [data.name]);

  function notify(text: string) {
    clearTimeout(timer.current);
    setMessage(text);
    timer.current = setTimeout(() => setMessage(""), 2400);
  }

  async function share() {
    try {
      if (navigator.share) {
        await navigator.share({ title: `${data.name} | Links`, text: `Acesse os links de ${data.name}.`, url: location.href });
      } else {
        await navigator.clipboard.writeText(location.href);
        notify("Link copiado.");
      }
    } catch (error) {
      const cancelled = typeof error === "object" && error !== null && "name" in error && error.name === "AbortError";
      if (!cancelled) notify("Não foi possível compartilhar.");
    }
  }

  return <>
    <a className="skip-link" href="#social-links">Ir para as redes sociais</a>
    <div className="portrait-stage">
      <img src="/assets/eu.png" alt={`Retrato de ${data.name}`} />
      <div className="portrait-shade" /><div className="portrait-grain" />
    </div>
    <main className="profile-shell" id="profile">
      <header className="topbar">
        <a className="monogram" href="#profile" aria-label="Voltar ao início">{monogram}<span>.</span></a>
        <button className="icon-button" type="button" aria-label="Compartilhar esta página" onClick={share}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="18" cy="5" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="19" r="2.5" />
            <path d="m8.2 10.8 7.6-4.5M8.2 13.2l7.6 4.5" />
          </svg>
        </button>
      </header>
      <section className="profile-content" aria-labelledby="profile-name">
        {tag && <div className="availability" aria-label={tag}><span className="tag-dot" aria-hidden="true" /><span>{tag}</span></div>}
        <div className="identity-block">
          <p className="eyebrow">{data.role}</p>
          <h1 id="profile-name">{firstName}{lastName.length > 0 && <><br />{lastName.join(" ")}</>}<span>.</span></h1>
          <p className="bio">{data.bio}</p>
        </div>
        <nav className="social-links" id="social-links" aria-label="Redes sociais">
          {data.links.map((link, index) => <SocialCard key={link.url} link={link} index={index} />)}
          {data.links.length === 0 && <p className="empty-links">Novos links serão publicados em breve.</p>}
        </nav>
        <footer className="profile-footer">
          <span>{data.location}</span><span className="footer-mark" aria-hidden="true">✦</span><span>© {new Date().getFullYear()}</span>
        </footer>
      </section>
    </main>
    <div className={`toast${message ? " is-visible" : ""}`} role="status" aria-live="polite">{message}</div>
  </>;
}
