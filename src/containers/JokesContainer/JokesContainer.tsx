import {useEffect, useState} from 'react';
import type {IJokes} from '../../types';
import JokeButton
    from '../../components/JokesList.tsx/jokeButton/jokeButton.tsx';
import JokesList from '../../components/JokesList.tsx/JokesList.tsx';


const JokesContainer = () => {
     const [jokesState, setJokesState] = useState<IJokes[]>([]);

    const URL: string = 'https://api.chucknorris.io/jokes/random';

    const fetchData = async () => {
        try {
            const jokesPromises: Promise<Response>[] = [];
            for (let i = 0; i < 5; i++) {
                jokesPromises.push(fetch(URL));
            }

            const responses = await Promise.all(jokesPromises);


            const jokesData = await Promise.all(
                responses.map(res => {
                    if (!res.ok) throw new Error('Ошибка сети');
                    return res.json();
                })
            );

            const newJokes: IJokes[] = jokesData.map(joke => ({
                id: joke.id,
                icon_url: joke.icon_url,
                value: joke.value,
            }));

            setJokesState(newJokes);
        } catch (e) {
            console.error('Ошибка при получении данных', e);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <JokeButton onFetch={fetchData} />
            <JokesList jokes={jokesState} />
        </>
    );
};

export default JokesContainer;