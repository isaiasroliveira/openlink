// Edite somente este objeto para personalizar nome, descrição e destinos.
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

export const profile: Profile = {
  name: "Isaias Oliveira",
  role: "TECNOLOGIA",
  bio: "Criatividade, estratégia e experiências digitais que aproximam pessoas.",
  location: "Fortaleza, Ceará, Brasil",
  // Use um texto para exibir a tag ou null para ocultá-la.
  tag: null,
  links: [
    {
      label: "Instagram",
      url: "https://www.instagram.com/isaiasroliveira",
      icon: "instagram",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/isaiasroliveira",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      url: "https://github.com/isaiasroliveira",
      icon: "github",
    },
  ],
};
