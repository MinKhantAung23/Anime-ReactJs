import { lazy } from "react";

const AnimeSearch = lazy(() => import("../features/search/pages/AnimeSearch"));
const MangaSearch = lazy(() => import("../features/search/pages/MangaSearch"));

const searchRoute = [
  {
    path: "/search/anime",
    element: <AnimeSearch />,
  },
  {
    path: "/search/manga",
    element: <MangaSearch />,
  },
];

export default searchRoute;
