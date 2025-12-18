import * as React from 'react';
import {useState} from 'react';
import type {ICinema} from '../../types';
import {toast, ToastContainer} from 'react-toastify';
import Form from '../../components/Form/Form.tsx';
import MovieList from '../../components/MovieList/MovieList.tsx';

const Movies = () => {
    const [cinema, setCinema] = useState<ICinema[]>([]);

    const onSubmitAddCinema = (movieName: string) => {
        const movieCopy = cinema.find(movie => movie.name === movieName);

        if (!movieName.trim()) {
            toast.error('Вы ничего не ввели!');
            return;
        }

         if (movieCopy) {
            toast.error('Этот фильм уже добавлен в список!');
            return;
        }

        setCinema(prevState => [
            ...prevState,
            {
                id: new Date().toISOString(),
                name: movieName,
            }
        ]);
    };


    const onInputChangeCinemaName = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
        setCinema(prevState => prevState.map(mov => {
            if (mov.id === id) {
                return {
                    ...mov,
                    name: event.target.value
                }
            }
            return mov;
        }));
    };

    const deleteMovie = (id: string) => {
        setCinema(prevState => prevState.filter(movie => movie.id !== id));
    };

    return (
         <>
            <ToastContainer/>
            <div className='container my-4 p-4 border border-2  border-secondary rounded'>
                <Form onSubmit={onSubmitAddCinema} />
                <MovieList
                    cinema={cinema}
                    onInputChangeMovieName={onInputChangeCinemaName}
                    deleteMovieButton={deleteMovie}
                />
            </div>
        </>
    );
};

export default Movies;