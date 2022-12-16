import { HomeTrendyStyledList, HomeTrendyTitle } from './HomeTrendyList.styled';
import { useEffect, useRef, useState } from 'react';
import { HomeTrendyItem } from './HomeTrendyItem';

export const HomeTrendyList = () => {
  const [trandingFilms, setTrandingFilms] = useState([]);

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      fetch(
        'https://api.themoviedb.org/3/trending/movie/week?api_key=411d08d89a4569fb1b50aec07ee6fb72'
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
    }
  }, []);


  return (
    <>
      <HomeTrendyTitle>Trending today</HomeTrendyTitle>
      <HomeTrendyStyledList>
        {trandingFilms.map(({ id, title }) => {
          return (
            <HomeTrendyItem key={id} title={title} id={id}></HomeTrendyItem>
          );
        })}
      </HomeTrendyStyledList>
    </>
  );
};
