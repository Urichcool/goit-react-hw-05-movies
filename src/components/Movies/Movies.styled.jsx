import styled from "@emotion/styled";

export const MoviesSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

export const SearchForm = styled.form`
    width: 400px;
    display: flex;
    padding-top: 30px;
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