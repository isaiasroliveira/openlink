import { ProfilePage } from "./pages/ProfilePage";
import { NotFoundPage } from "./pages/NotFoundPage";

export function App() {
  return location.pathname === "/" || location.pathname === "/index.html" ? <ProfilePage /> : <NotFoundPage />;
}
