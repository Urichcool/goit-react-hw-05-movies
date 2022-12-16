import { MoviesSection } from "./Movies.styled"
import { SearchMovieForm } from "./SearchMovieForm";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Movies = () => {
    const { movieId } = useParams()
    return (
      <MoviesSection>
        {!movieId && <SearchMovieForm />}
        <Outlet />
      </MoviesSection>
    );
}