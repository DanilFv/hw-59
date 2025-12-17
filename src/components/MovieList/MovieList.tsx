import MovieListChildren from './MovieListChildren/MovieListChildren.tsx';
import type {ICinema} from '../../types';
import * as React from 'react';

interface Props {
    cinema: ICinema[];
    onInputChangeMovieName: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    deleteMovieButton: (id: string) => void;
}


const MovieList: React.FC<Props> = ({cinema, onInputChangeMovieName, deleteMovieButton}) => {
    return (
       <div className='row'>
           <h3 className='my-3 fs-4'>To watch list:</h3>
           <div className='col-12'>
                <MovieListChildren cinema={cinema} onInputChangeMovieName={onInputChangeMovieName} deleteMovie={deleteMovieButton} />
           </div>
       </div>
    );
};

export default MovieList;