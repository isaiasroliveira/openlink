import type { Profile } from "../types/profile";

// Edite este objeto para personalizar o perfil.
export const profile: Profile = {
  name: "Isaias Oliveira",
  role: "TECNOLOGIA",
  bio: "Criatividade, estratégia e experiências digitais que aproximam pessoas.",
  location: "Fortaleza, Ceará, Brasil",
  // Use um texto para exibir a tag ou null para ocultá-la.
  tag: null,
  links: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/isaiasroliveira",
      icon: "linkedin",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/isaiasroliveira",
      icon: "instagram",
    },
    {
      label: "GitHub",
      url: "https://github.com/isaiasroliveira",
      icon: "github",
    },
  ],
};
