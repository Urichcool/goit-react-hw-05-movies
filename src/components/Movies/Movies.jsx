import { MoviesSection } from './Movies.styled';
import { SearchMovieForm } from './SearchMovieForm';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { SearchMovieList } from './SearchMovieList';

export const Movies = () => {
  const [movieQuery, setMovieQuery] = useState('');
  const { movieId } = useParams();

  const movieQueryHandler = data => {
    setMovieQuery(data);
  };

  return (
    <MoviesSection>
      {!movieId && (
        <>
          <SearchMovieForm onSubmit={movieQueryHandler} />
          <SearchMovieList movieQuery={movieQuery} />
        </>
      )}
      <Outlet />
    </MoviesSection>
  );
};
