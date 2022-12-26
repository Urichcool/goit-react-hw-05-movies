import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HomeSection = styled.section`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px grey solid;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 30px;
  margin-top: 5px;
`;

export const HomeTrendyStyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 10px;
`;

export const HomeTrendyStyledListItem = styled.li`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const HomeTrendyTitle = styled.h1`
  margin: 0;
`;

export const StyledLink = styled(Link)`
  font-weight: 600;
  font-size: 24px;
  color: black;
  text-decoration: none;

  &:hover,
  &:focus {
    color: orange;
  }
`;
