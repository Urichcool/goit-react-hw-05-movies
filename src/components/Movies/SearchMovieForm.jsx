import {
    SearchForm,
    SearchInput,
    SearchButton
} from "./Movies.styled"

export const SearchMovieForm = () => {
    return (
        <SearchForm>
            <SearchInput/>
            <SearchButton>Search</SearchButton>
       </SearchForm> 
    )
}