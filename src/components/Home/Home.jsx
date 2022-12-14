import {
  HeaderContainer,
  HeaderNav,
  StyledLink,
  TrendingSection,
  TrendingTitle,
} from './Home.styled';
import { Outlet } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

export const Home = () => {
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
          const newArr = [];
          films.results.map(({ title }) => {
            return newArr.push(title);
          });
          setTrandingFilms([...newArr]);
        });
    }
  }, []);

  return (
    <>
      <HeaderContainer>
        <HeaderNav>
          {navItems.map(({ href, text }) => (
            <StyledLink to={href} key={href}>
              {text}
            </StyledLink>
          ))}
        </HeaderNav>
        <Outlet />
      </HeaderContainer>
      <TrendingSection>
        <TrendingTitle>Trending today</TrendingTitle>
        
      </TrendingSection>
    </>
  );
};
