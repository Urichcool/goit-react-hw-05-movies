import {
  MovieIdReviewsItemStyled,
  MovieIdText,
  MovieIdStrongText,
} from './MovieId.styled';

export const MovieIdReviewsItem = ({ author, content }) => {
  return (
    <MovieIdReviewsItemStyled>
      <MovieIdStrongText>{author}</MovieIdStrongText>
      <MovieIdText>{content}</MovieIdText>
    </MovieIdReviewsItemStyled>
  );
};
