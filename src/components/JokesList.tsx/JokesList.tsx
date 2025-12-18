import JokesItem from './JokesItem/JokesItem.tsx';
import type {IJokes} from '../../types';
import * as React from 'react';

interface Props {
    jokes: IJokes[];
}

const JokesList: React.FC<Props> = ({jokes}) => {
    return (
        <div className='container'>
            <div className='row'>
                <JokesItem jokesState={jokes} />
            </div>
        </div>
    );
};

export default JokesList;