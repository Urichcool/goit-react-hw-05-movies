import {
    SearchForm,
    SearchInput,
    SearchButton
} from "./Movies.styled"
import { useState } from "react"

export const SearchMovieForm = ({onSubmit}) => {
    const [movieQuery, setMovieQuery] = useState('')
    
    const handleMovieQueryChange = e => {
    setMovieQuery(e.currentTarget.value.toLowerCase().trim());
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        if (movieQuery === '') {
            return;
        }
        onSubmit(movieQuery)
        setMovieQuery('')
    }
    return (
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          autoComplete="off"
          name="movieName"
          value={movieQuery}
          onChange={handleMovieQueryChange}
          autoFocus
          placeholder="Search movie by name"
        />
        <SearchButton>Search</SearchButton>
      </SearchForm>
    );
}