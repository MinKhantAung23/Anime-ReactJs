import { lazy } from "react";

const AnimePage = lazy(() => import("../features/anime/pages/AnimePage"));
const AnimeDetailPage = lazy(() =>
  import("../features/anime/pages/AnimeDetailPage")
);
const SeasonNowAnimePage = lazy(() =>
  import("../features/anime/pages/SeasonNowAnimePage")
);
const TopAnimePage = lazy(() => import("../features/anime/pages/TopAnimePage"));
const UpcomingAnimePage = lazy(() =>
  import("../features/anime/pages/UpcomingAnimePage")
);
const AnimeDetailAllCharacter = lazy(() =>
  import("../features/anime/components/AnimeDetailAllCharacter")
);

const animeRoute = [
  {
    path: "/anime",
    element: <AnimePage />,
  },
  {
    path: "/top/anime",
    element: <TopAnimePage />,
  },
  {
    path: "/upcoming/anime",
    element: <UpcomingAnimePage />,
  },
  {
    path: "/now/anime",
    element: <SeasonNowAnimePage />,
  },
  {
    path: "/anime/:id",
    element: <AnimeDetailPage />,
  },
  {
    path: "/anime/:id/characters",
    element: <AnimeDetailAllCharacter />,
  },
];

export default animeRoute;
