import { lazy } from "react";

const FavoritePage = lazy(() =>
  import("../features/favorite/pages/FavoritePage")
);

const favoriteRoute = [
  {
    path: "/favorite",
    element: <FavoritePage />,
  },
];

export default favoriteRoute;
