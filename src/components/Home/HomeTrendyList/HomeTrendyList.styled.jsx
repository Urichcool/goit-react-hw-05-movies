import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const HomeTrendyStyledList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 10px;
`

export const HomeTrendyStyledListItem = styled.li`
margin-bottom: 10px;
&:last-child{
  margin-bottom: 0;
}
`

export const HomeTrendyTitle = styled.h1`
  margin: 0;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 600;
  font-size: 24px;
  color: black;
  text-decoration: none;



  &:hover,
  &:focus {
    color: orange;
  }
`;
