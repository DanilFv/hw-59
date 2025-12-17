import * as React from 'react';
import {useState} from 'react';

interface Props {
    onSubmit: (movieName: string) => void;
}


const Form: React.FC<Props> = ({onSubmit}) => {

    const [formState, setFormState] = useState<string>('');

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState(event.target.value);
    }

    const onSubmitAdd = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(formState);
        setFormState('');
    }

    return (
        <div className='row'>
            <div className='col-md-6'>
                <form
                    className='d-flex align-items-center'
                    onSubmit={onSubmitAdd}
                >
                    <input
                        type="text"
                        name="movieName"
                        id="movieName"
                        placeholder='add movie name'
                        className="form-control"
                        value={formState}
                        onChange={onInputChange}
                    />
                    <button type='submit' className='btn btn-primary mx-2'>Add</button>
                </form>
            </div>
        </div>
    );
};

export default Form;