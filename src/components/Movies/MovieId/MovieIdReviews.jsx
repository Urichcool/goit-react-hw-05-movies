import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MovieIdReviewsList, MovieIdText } from './MovieId.styled';
import { MovieIdReviewsItem } from './MovieIdReviewsItem';

const MovieIdReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=2eb857a72ef08fb512c529b6c9a18227`
    )
      .then(res => res.json())
      .then(reviews => {
        reviews.results.map(({ author, content, id }) => {
          return setReviews(state => [
            ...state,
            ...[
              {
                author: author,
                content: content,
                id: id,
              },
            ],
          ]);
        });
      });
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 ? (
        reviews.map(({ id, author, content }) => {
          return (
            <MovieIdReviewsList>
              <MovieIdReviewsItem key={id} author={author} content={content} />
            </MovieIdReviewsList>
          );
        })
      ) : (
        <MovieIdText>We don't have any reviews for this movie</MovieIdText>
      )}
    </>
  );
};

export default MovieIdReviews;
