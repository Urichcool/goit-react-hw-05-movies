import { SearchMovieItemStyled, SearchMovieStyledLink} from './Movies.styled';

export const SearchMovieItem = ({ title, id }) => {
    return (
      <SearchMovieItemStyled>
        <SearchMovieStyledLink
          to={`${id}`}
          state={{ from: '/movies' }}>{title}
        </SearchMovieStyledLink>
      </SearchMovieItemStyled>
    );
}