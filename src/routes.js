import { lazy } from "react";

export default [
  // {
  //   home: "/",
  //   movies: "/movies",
  //   movieDetails: "/movies/:movieId",
  //   movieCast: "/movies/:movieId/cast",
  //   movieReviews: "/:movieId/reviews",
  // },

  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() => import("./views/Home")),
  },

  {
    path: "/movies",
    label: "Movies",
    exact: true,
    component: lazy(() => import("./views/Movies")),
  },

  {
    path: "/movies/:movieId",
    label: "MoviesDetails",
    exact: false,
    component: lazy(() => import("./views/MovieDetails")),
  },

  // {
  //   path: "/movies/:movieId/cast",
  //   label: "MovieCast",
  //   exact: false,
  //   component: lazy(() => import("./views/InlineMovieCast")),
  // },

  // {
  //   path: "/:movieId/reviews",
  //   label: "MovieReview",
  //   exact: false,
  //   component: lazy(() => import("./views/InlineMovieReview")),
  // },
];
