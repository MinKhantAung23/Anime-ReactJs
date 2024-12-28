import { lazy } from "react";

const EpisodeVideoPage = lazy(() =>
  import("../features/video/pages/EpisodeVideoPage")
);

const PopularEpisodePage = lazy(() =>
  import("../features/video/pages/PopularEpisodePage")
);

const AnimeTrailer = lazy(() => import("../features/video/pages/AnimeTrailer"));

const watchVideoRoute = [
  {
    path: "/episodes",
    element: <EpisodeVideoPage />,
  },
  {
    path: "/popular/episodes",
    element: <PopularEpisodePage />,
  },
  {
    path: "/trailer",
    element: <AnimeTrailer />,
  },
];

export default watchVideoRoute;
