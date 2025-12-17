import './App.css';
import Form from './components/Form/Form';
import {useState} from 'react';
import type {ICinema} from './types';
import {toast, ToastContainer} from 'react-toastify';


const App = () => {

    const [cinema, setCinema] = useState<ICinema[]>([]);


    const onSubmitAddCinema = (movieName: string) => {

        const movieCopy = cinema.find(movie => movie.name === movieName);


        if (!movieName.trim()) {
            toast.error('Вы ничего не ввели!');
        }

         if (movieCopy) {
            toast.error('Этот фильм уже добавлен в список!');
        }

        setCinema(prevState =>  [
            ...prevState,
            {
                id: new Date().toISOString(),
                name: movieName,
            }
        ]);
    };


    return (
            <>
                 <ToastContainer/>
                 <div className='container my-4 p-4 border border-2  border-primary rounded'>
                       <Form onSubmit={onSubmitAddCinema} />
                 </div>
            </>
    )
}




export default App
