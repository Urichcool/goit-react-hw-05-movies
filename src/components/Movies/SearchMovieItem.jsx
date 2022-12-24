import { SearchMovieItemStyled, SearchMovieStyledLink} from './Movies.styled';

export const SearchMovieItem = ({ title, id, query }) => {
    return (
      <SearchMovieItemStyled>
        <SearchMovieStyledLink
          to={`${id}`}
          state={{ from: `/movies?query=${query}` }}>{title}
        </SearchMovieStyledLink>
      </SearchMovieItemStyled>
    );
}