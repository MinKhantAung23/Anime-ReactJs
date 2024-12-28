import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../features/layout/PublicLayout";
import NotFound from "../components/NotFound";
import publicRoute from "./publicRoute";
import animeRoute from "./animeRoute";
import mangaRoute from "./mangaRoute";
import bookmarkRoute from "./bookmarkRoute";
import favoriteRoute from "./favoriteRoute";
import characterRoute from "./characterRoute";
import watchVideoRoute from "./watchVideoRoute";
import searchRoute from "./searchRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <NotFound />,
    children: [
      ...publicRoute,
      ...animeRoute,
      ...mangaRoute,
      ...bookmarkRoute,
      ...favoriteRoute,
      ...characterRoute,
      ...watchVideoRoute,
      ...searchRoute,
    ],
  },
]);

export default router;
