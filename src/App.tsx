import './App.css';
import Form from './components/Form/Form';

const App = () => {



    const onSubmitAddCinema = (movieName: string) => {
        console.log(movieName);
    }

    return (
            <>
                 <div className='container my-4 p-4 border border-2  border-gray rounded'>
                       <Form onSubmit={onSubmitAddCinema} />
                 </div>
            </>
    )
}




export default App
