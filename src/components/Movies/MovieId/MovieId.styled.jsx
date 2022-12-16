import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const MovieIdBackLink = styled(NavLink)`
  padding: 5px;
  border-radius: 4px;
  text-decoration: none;
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 30px;
  margin-left: 20px;
  font-size: 20px;
  color: black;
  background-color: #afaff0;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover,
  &:focus{
    color: orange;
  }
`;

export const MovieIdImg = styled.img`
  width: 600px;
  height: 300px;
  display: block;
  margin-bottom: 20px;
`

export const MovieIdTitle = styled.h2`
  margin: 0;
`

export const MovieIdText = styled.p`
  margin: 0;
  font-size: 20px;
  margin-top: 15px;
  width: 600px;
`

export const MovieIdStrongText = styled.strong`
  margin: 0;
  font-size: 20px;
  margin-top: 15px;
`;