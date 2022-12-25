import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MoviesSection = styled.section`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  position: relative;
  border: 1px grey solid;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 30px;
  text-align: center;
`;

export const SearchForm = styled.form`
  width: 400px;
  display: flex;
  height: 30px;
`;

export const SearchInput = styled.input`
  width: 100%;
  margin-right: 10px;
`;

export const SearchButton = styled.button`
  font-size: 20px;
  cursor: pointer;
  border: none;
  background-color: #afaff0;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: orange;
  }
`;

export const SearchMovieListStyled = styled.ul`
  padding: 0;
  list-style: none;
`;

export const SearchMovieItemStyled = styled.li`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SearchMovieStyledLink = styled(NavLink)`
  font-weight: 600;
  font-size: 24px;
  color: black;
  text-decoration: none;

  &:hover,
  &:focus {
    color: orange;
  }
`;
