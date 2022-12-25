import { SearchForm, SearchInput, SearchButton } from './Movies.styled';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchMovieForm = ({ onSubmit }) => {
  const [movieQuery, setMovieQuery] = useState('');

  const handleMovieQueryChange = e => {
    setMovieQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (movieQuery === '') {
      return;
    }
    onSubmit(movieQuery.toLowerCase().trim());
    setMovieQuery('');
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        autoComplete="off"
        name="movieName"
        value={movieQuery}
        onChange={handleMovieQueryChange}
        autoFocus
        placeholder="Search movie by name"
      />
      <SearchButton>Search</SearchButton>
    </SearchForm>
  );
};

SearchMovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
