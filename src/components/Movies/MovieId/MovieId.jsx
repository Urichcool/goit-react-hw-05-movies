import {
  MovieIdBackLink,
  MovieIdTitle,
  MovieIdImg,
  MovieIdText,
  MovieIdStrongText,
  MovieIdAditionalList,
  MovieIdAditionalItem,
  MovieIAditionalLink,
  MovieIdAditionalContainer,
} from './MovieId.styled';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader';
import { Suspense } from 'react';
import { BiArrowBack } from 'react-icons/bi';

const MovieId = () => {
  const [filmData, setFilmData] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

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
      {Object.keys(filmData).length !== 0 ? (
        <>
          <MovieIdBackLink to={backLinkHref}>
            <BiArrowBack />
            <p style={{ margin: 0, marginLeft: 10 }}>Go back</p>
          </MovieIdBackLink>
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
                <MovieIAditionalLink to={'cast'} state={{ from: backLinkHref }}>
                  Cast
                </MovieIAditionalLink>
              </MovieIdAditionalItem>
              <MovieIdAditionalItem>
                <MovieIAditionalLink
                  to={'reviews'}
                  state={{ from: backLinkHref }}
                >
                  Reviews
                </MovieIAditionalLink>
              </MovieIdAditionalItem>
            </MovieIdAditionalList>
          </MovieIdAditionalContainer>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default MovieId;
