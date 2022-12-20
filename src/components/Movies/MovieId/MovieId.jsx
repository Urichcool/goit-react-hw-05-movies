import {
  MovieIdBackLink,
  MovieIdTitle,
  MovieIdImg,
  MovieIdText,
  MovieIdStrongText,
  MovieIdAditionalList,
  MovieIdAditionalItem,
  MovieIAditionalLink,
MovieIdAditionalContainer
} from './MovieId.styled';
import { useParams } from 'react-router-dom';
import { useState, useEffect, } from 'react';
import { Outlet } from 'react-router-dom';

export const MovieId = () => {
  const [filmData, setFilmData] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=2eb857a72ef08fb512c529b6c9a18227`
    )
      .then(res => res.json())
      .then(
        ({
          backdrop_path,
          title,
          vote_average,
          overview,
          genres,
          release_date,
        }) =>
          setFilmData({
            img: `https://image.tmdb.org/t/p/w500${backdrop_path}`,
            title: title,
            year: release_date.split('-')[0],
            userScore: `${Math.round(vote_average * 10)}%`,
            overview: overview,
            genres: genres
              .map(genre => {
                return genre.name;
              })
              .join(' '),
          })
      );
  }, [movieId]);

  return (
    <>
      <MovieIdBackLink to={'/'}>Go back</MovieIdBackLink>
      <MovieIdImg src={filmData.img} alt={filmData.title} />
      <MovieIdTitle>{`${filmData.title} (${filmData.year})`}</MovieIdTitle>
      <MovieIdText>User Score: {filmData.userScore}</MovieIdText>
      <MovieIdStrongText>Overview</MovieIdStrongText>
      <MovieIdText>{filmData.overview}</MovieIdText>
      <MovieIdStrongText>Genres</MovieIdStrongText>
      <MovieIdText>{filmData.genres}</MovieIdText>
      <MovieIdAditionalContainer>
        <MovieIdStrongText>Aditional information</MovieIdStrongText>
        <MovieIdAditionalList>
          <MovieIdAditionalItem>
            <MovieIAditionalLink to={'cast'}>Cast</MovieIAditionalLink>
          </MovieIdAditionalItem>
          <MovieIdAditionalItem>
            <MovieIAditionalLink to={'reviews'}>Reviews</MovieIAditionalLink>
          </MovieIdAditionalItem>
        </MovieIdAditionalList>
      </MovieIdAditionalContainer>
      <Outlet />
    </>
  );
};
