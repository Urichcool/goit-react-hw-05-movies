import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout';

const routes = {
  HomeTrendyList: lazy(() => import('./Home/HomeTrendyList')),
  Movies: lazy(() => import('./Movies/Movies')),
  MovieId: lazy(() => import('./Movies/MovieId/MovieId')),
  MovieIdCast: lazy(() => import('./Movies/MovieId/MovieIdCast')),
  MovieIdReviews: lazy(() => import('./Movies/MovieId/MovieIdReviews')),
};

export const App = () => {
  const { HomeTrendyList, Movies, MovieId, MovieIdCast, MovieIdReviews } =
    routes;

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<HomeTrendyList />} />
        <Route path="movies" element={<Movies />}>
          <Route path=":movieId" element={<MovieId />}>
            <Route path="cast" element={<MovieIdCast />} />
            <Route path="reviews" element={<MovieIdReviews />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<SharedLayout />} />
    </Routes>
  );
};
