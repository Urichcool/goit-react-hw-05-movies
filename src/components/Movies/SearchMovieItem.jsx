import { SearchMovieItemStyled, SearchMovieStyledLink } from './Movies.styled';
import PropTypes from 'prop-types';

export const SearchMovieItem = ({ title, id, query }) => {
  return (
    <SearchMovieItemStyled>
      <SearchMovieStyledLink
        to={`${id}`}
        state={{ from: `/movies?query=${query}` }}
      >
        {title}
      </SearchMovieStyledLink>
    </SearchMovieItemStyled>
  );
};

SearchMovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  query: PropTypes.string.isRequired,
};
