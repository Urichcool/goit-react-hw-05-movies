import { useState, useEffect } from 'react';
import { SearchMovieListStyled } from './Movies.styled';
import { SearchMovieItem } from './SearchMovieItem';
import PropTypes from 'prop-types';

export const SearchMovieList = ({ movieQuery }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!movieQuery) {
      setMovies([]);
      return;
    }
    setMovies([]);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=2eb857a72ef08fb512c529b6c9a18227&query=${movieQuery}`
    )
      .then(res => res.json())
      .then(films => {
        films.results.map(({ title, id }) => {
          return setMovies(state => [
            ...state,
            ...[
              {
                title: title,
                id: id,
              },
            ],
          ]);
        });
      });
  }, [movieQuery]);

  return (
    <>
      {movies.length !== 0 && (
        <SearchMovieListStyled>
          {movies.map(({ id, title }) => {
            return (
              <SearchMovieItem
                key={id}
                title={title}
                id={id}
                query={movieQuery}
              />
            );
          })}
        </SearchMovieListStyled>
      )}
    </>
  );
};

SearchMovieList.propTypes = {
  movieQuery: PropTypes.string,
};
