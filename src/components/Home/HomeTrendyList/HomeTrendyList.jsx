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
        'https://api.themoviedb.org/3/trending/movie/week?api_key=2eb857a72ef08fb512c529b6c9a18227'
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