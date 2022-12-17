import {
  HomeTrendyStyledList,
  HomeTrendyTitle,
  HomeSection,
} from './HomeTrendyList.styled';
import { useEffect, useRef, useState } from 'react';
import { HomeTrendyItem } from './HomeTrendyItem';

export const HomeTrendyList = () => {
  const [trandingFilms, setTrandingFilms] = useState([]);
  useEffect(() => {
      fetch(
        'https://api.themoviedb.org/3/trending/movie/week?api_key=b472d4f12973a327a2d70c5466857dcc'
      )
        .then(res => res.json())
        .then(films => {
          films.results.map(({ title, id }) => {
            return setTrandingFilms(state => [
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
  }, []);

  return (
    <HomeSection>
      <HomeTrendyTitle>Trending today</HomeTrendyTitle>
      <HomeTrendyStyledList>
        {trandingFilms.map(({ id, title }) => {
          return (
            <HomeTrendyItem key={id} title={title} id={id}></HomeTrendyItem>
          );
        })}
      </HomeTrendyStyledList>
    </HomeSection>
  );
};
