import type {IJokes} from '../../../types';
import * as React from 'react';

interface Props {
    jokesState: IJokes[];
}

const JokesItem: React.FC<Props> = ({jokesState}) => {
    return (
        <>
            <div className='row justify-content-center'>
                {jokesState.length > 0 ? (
                    jokesState.map((joke: IJokes) => (
                        <div
                            className='col-md-4 d-flex m-2 flex-column align-items-center border border-2 border-secondary rounded p-3 my-2'
                            key={joke.id}
                        >
                            <img
                                width='100px'
                                src={joke.icon_url}
                                alt={joke.value}
                            />
                            <p className='my-2 fs-5 fw-bold text-center'>{joke.value}</p>
                        </div>
                    ))
                ):
                    <p>No jokes :(</p>
                }
            </div>
        </>
    );
};

export default JokesItem;