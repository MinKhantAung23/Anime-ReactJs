import { lazy } from "react";

const MangaPage = lazy(() => import("../features/manga/pages/MangaPage"));
const TopMangaPage = lazy(() => import("../features/manga/pages/TopMangaPage"));
const MangaDetailPage = lazy(() =>
  import("../features/manga/pages/MangaDetailPage")
);
const MangaDetailAllCharacter = lazy(() =>
  import("../features/manga/components/MangaDetailAllCharacter")
);

const mangaRoute = [
  {
    path: "/manga",
    element: <MangaPage />,
  },
  {
    path: "/top/manga",
    element: <TopMangaPage />,
  },
  {
    path: "/manga/:id",
    element: <MangaDetailPage />,
  },
  {
    path: "/manga/:id/characters",
    element: <MangaDetailAllCharacter />,
  },
];

export default mangaRoute;
