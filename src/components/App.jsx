import { Route, Routes } from 'react-router-dom';
import { Movies } from './Movies/Movies';
import { Layout } from './Layout';
import { MovieId } from './Movies/MovieId/MovieId';
import { HomeTrendyList } from './Home/HomeTrendyList';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomeTrendyList />} />
        <Route path="movies" element={<Movies />}>
          <Route path=":movieId" element={<MovieId />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};
