import { afterEach, expect, test, vi } from "vitest";
import { cleanup, render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ProfilePage } from "../pages/ProfilePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { profile } from "../config/profile";

afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

test("renders configured identity and safe social destinations", () => {
  render(<ProfilePage />);
  expect(screen.getByRole("heading", { level: 1 }).textContent).toContain(profile.name.split(" ")[0]);
  expect(screen.getByRole("link", { name: "Voltar ao início" }).textContent).toBe("IO.");
  for (const link of profile.links) {
    const anchor = screen.getByRole("link", { name: `Abrir ${link.label} em uma nova aba` });
    expect(anchor.getAttribute("href")).toBe(link.url);
    expect(anchor.getAttribute("rel")).toBe("noopener noreferrer");
  }
});

test.each([null, undefined, "", "   "])("omits an empty tag: %s", tag => {
  const { container } = render(<ProfilePage data={{ ...profile, tag }} />);
  expect(container.querySelector(".availability")).toBeNull();
});

test("renders custom tag and optional captions without parsing markup", () => {
  const data = { ...profile, tag: "  Aberto a colaborações  ", links: [{ ...profile.links[0], caption: "<b>Bastidores</b>" }] };
  const { container } = render(<ProfilePage data={data} />);
  expect(screen.getByText("Aberto a colaborações")).toBeTruthy();
  expect(screen.getByText("<b>Bastidores</b>")).toBeTruthy();
  expect(container.querySelector("b")).toBeNull();
});

test("renders the empty links state", () => {
  render(<ProfilePage data={{ ...profile, links: [] }} />);
  expect(screen.getByText("Novos links serão publicados em breve.")).toBeTruthy();
});

test("copies the URL when native sharing is unavailable", async () => {
  const writeText = vi.fn().mockResolvedValue(undefined);
  vi.stubGlobal("navigator", { clipboard: { writeText } });
  render(<ProfilePage />);
  fireEvent.click(screen.getByRole("button", { name: "Compartilhar esta página" }));
  await waitFor(() => expect(screen.getByRole("status").textContent).toBe("Link copiado."));
  expect(writeText).toHaveBeenCalledWith(location.href);
});

test("uses native sharing when available", async () => {
  const share = vi.fn().mockResolvedValue(undefined);
  vi.stubGlobal("navigator", { share });
  render(<ProfilePage />);
  fireEvent.click(screen.getByRole("button", { name: "Compartilhar esta página" }));
  await waitFor(() => expect(share).toHaveBeenCalledWith(expect.objectContaining({ url: location.href })));
});

test("shows sharing errors but treats cancellation silently", async () => {
  const share = vi.fn().mockRejectedValue(new Error("Unavailable"));
  vi.stubGlobal("navigator", { share });
  const { unmount } = render(<ProfilePage />);
  fireEvent.click(screen.getByRole("button", { name: "Compartilhar esta página" }));
  await waitFor(() => expect(screen.getByRole("status").textContent).toBe("Não foi possível compartilhar."));
  unmount();
  share.mockRejectedValue(new DOMException("Cancelled", "AbortError"));
  render(<ProfilePage />);
  fireEvent.click(screen.getByRole("button", { name: "Compartilhar esta página" }));
  await waitFor(() => expect(share).toHaveBeenCalledTimes(2));
  expect(screen.getByRole("status").textContent).toBe("");
});

test("missing pages offer a route home and disable indexing", () => {
  render(<NotFoundPage />);
  expect(screen.getByRole("link", { name: "Voltar ao perfil" }).getAttribute("href")).toBe("/");
  expect(document.querySelector('meta[name="robots"]')?.getAttribute("content")).toBe("noindex");
});
