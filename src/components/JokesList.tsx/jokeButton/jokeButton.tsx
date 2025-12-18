import React from 'react';

interface Props {
    onFetch: () => void;
}

const JokeButton: React.FC<Props> = React.memo(({onFetch}) => {
    return (
        <div className="text-center my-4">
            <button className="btn btn-primary" type='button' onClick={onFetch}>
                Get 5 New Jokes
            </button>
        </div>
    );
});

export default JokeButton;