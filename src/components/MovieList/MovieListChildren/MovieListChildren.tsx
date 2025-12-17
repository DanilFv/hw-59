import type {ICinema} from '../../../types';
import * as React from 'react';

interface Props {
    cinema: ICinema[];
    onInputChangeMovieName: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    deleteMovie: (id: string) => void;
}

const MovieListChildren: React.FC<Props> = ({cinema, onInputChangeMovieName, deleteMovie}) => {

    return (
       <>
           {cinema.length === 0 && <p>Фильмы пока не добавлены</p>}

           {cinema.length > 0 && cinema.map((movie: ICinema) => (
               <div
                    className='col-md-5 my-3 d-flex align-items-center'
                    key={movie.id}
                >
                    <input
                        className='form-control'
                        type="text"
                        value={movie.name}
                        placeholder={movie.name}
                        onChange={(event) => onInputChangeMovieName(event, movie.id)}
                    />
                    <button type='button' className='btn btn-danger mx-2' onClick={() => deleteMovie(movie.id)}>X</button>
                </div>
           ))}
       </>
    );
};

export default MovieListChildren;