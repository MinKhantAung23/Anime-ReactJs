import { lazy } from "react";

const CharacterPage = lazy(() =>
  import("../features/character/pages/CharacterPage")
);
const CharacterDetailPage = lazy(() =>
  import("../features/character/pages/CharacterDetailPage")
);

const characterRoute = [
  {
    path: "/top/character",
    element: <CharacterPage />,
  },
  {
    path: "/character/:id",
    element: <CharacterDetailPage />,
  },
];

export default characterRoute;
