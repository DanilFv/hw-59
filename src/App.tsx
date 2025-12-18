import './App.css';
import JokesContainer from './containers/JokesContainer/JokesContainer.tsx';
import Movies from './containers/Movies/Movies.tsx';


const App = () => {

    return (
        <>
            <Movies />
            <hr />
            <JokesContainer />
        </>
    )
}


export default App
