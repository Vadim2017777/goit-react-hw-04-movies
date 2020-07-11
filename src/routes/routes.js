import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() => import("../views/Home")),
  },

  {
    path: "/movies",
    label: "Movies",
    exact: true,
    component: lazy(() => import("../views/Movies")),
  },

  {
    path: "/movies/:movieId",
    label: "MoviesDetails",
    exact: false,
    component: lazy(() => import("../views/MovieDetails")),
  },
];
