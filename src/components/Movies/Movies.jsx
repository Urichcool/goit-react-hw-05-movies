import { MoviesSection } from './Movies.styled';
import { SearchMovieForm } from './SearchMovieForm';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { SearchMovieList } from './SearchMovieList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const { movieId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const movieQueryHandler = data => {
    setSearchParams({ query: data });
  };

  return (
    <MoviesSection>
      {!movieId && (
        <>
          <SearchMovieForm onSubmit={movieQueryHandler} />
          <SearchMovieList movieQuery={query} />
        </>
      )}
      <Outlet />
    </MoviesSection>
  );
};

export default Movies;
