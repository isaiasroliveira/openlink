import { useEffect } from "react";
import { profile } from "../config/profile";

export function NotFoundPage() {
  useEffect(() => {
    document.title = `Página não encontrada | ${profile.name}`;
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.append(meta);
    return () => meta.remove();
  }, []);
  return <main className="not-found">
    <span>ERRO 404</span>
    <h1>Este link não está por aqui.</h1>
    <p>O endereço pode ter mudado. Volte ao perfil para encontrar todas as redes disponíveis.</p>
    <a href="/">Voltar ao perfil</a>
  </main>;
}
