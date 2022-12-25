import { MovieIdCastItemStyled, MovieIdCastText } from './MovieId.styled';

export const MovieIdCastItem = ({ name }) => {
  return (
    <MovieIdCastItemStyled>
      <MovieIdCastText>{name}</MovieIdCastText>
    </MovieIdCastItemStyled>
  );
};
