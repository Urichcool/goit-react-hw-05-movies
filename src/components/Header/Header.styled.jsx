import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  background-color: #afaff0;
  border-bottom: 1px grey solid;
`;

export const HeaderNav = styled.nav`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 600;
  font-size: 24px;
  color: black;
  text-decoration: none;

  &.active {
    color: red;
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: orange;
  }
`;
