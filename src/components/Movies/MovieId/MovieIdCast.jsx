import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { MovieIdCastList } from "./MovieId.styled";
import { MovieIdCastItem } from "./MovieIdCastItem";

export const MovieIdCast = () => {
    const [castData, setCastData] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=2eb857a72ef08fb512c529b6c9a18227`
        ).then(res => res.json())
            .then(credits => credits.cast.map(({ id, name }) => {
                return setCastData(state => [...state, ...[{
                    id: id,
                    name:name
                }]])
            }))
              
    }, [movieId])

    return (
        <MovieIdCastList>
            {castData.map(({ id, name }) => {
                return (<MovieIdCastItem key={id} name={name} />
    )
            })}
</MovieIdCastList>
         
        
    )
}