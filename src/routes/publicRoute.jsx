import { lazy } from "react";

const HomePage = lazy(() => import("../features/home/pages/HomePage"));
const AboutPage = lazy(() => import("../features/about/pages/AboutPage"));
const ContactPage = lazy(() => import("../features/contact/pages/ContactPage"));

const publicRoute = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
];
export default publicRoute;
