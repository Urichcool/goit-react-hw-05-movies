import styled from "@emotion/styled";

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
`

export const SearchInput = styled.input`
    width: 100%;
    margin-right: 10px;
`

export const SearchButton = styled.button`
font-size: 20px;
  cursor: pointer;
  border: none;
  background-color: #afaff0;
  border-radius: 4px;
  &:hover,
  &:focus{
    color: orange;
  }
`;