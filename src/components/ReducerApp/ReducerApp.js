import React, { useEffect, useReducer, useState } from 'react'
import { reducer } from './reducer'

const init = () => {
    return JSON.parse(localStorage.getItem('state')) || [];
}

export const ReducerApp = () => {
    
    const [state, dispatch] = useReducer(reducer, [], init);

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state));
        
    }, [state])

    const newState = {
        id: new Date().getTime(),
        task: inputValue,
        done: false
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const action = {
            type: 'add',
            payload:newState
        }
        dispatch(action);
        setInputValue('')
    }

    const handleDelete = (id) => {
        const action = {
            type:'delete',
            payload:id
        }

        dispatch(action);
    }

    const handleToggle = (id) => {
        const action = {
            type:'toggle',
            payload:id
        }

        dispatch(action);
    }
    
    
    
    
    
    return (
        <div>
            <h1>ReducerApp</h1>
            <hr/>

            <div className='row'>
                <div className='col-8'>
                    <h4>Works to do</h4>
                    <hr/>
                    {
                        state.map( (st, i) => {
                            return <div>
                                        <li className='li-class'>
                                            <p className={ st.done && 'complete' || '' } onClick={ () => handleToggle(st.id)} >{i+1}. {st.task}</p>
                                            <button className='btn btn-danger' onClick={() => handleDelete(st.id)}>Delete</button>
                                        </li>
                                        <hr/>
                        </div>
                        })
                    }
                </div>
                <div className='col-4'>
                    <h4>Add a new Work</h4>
                    <hr/>
                    <form onSubmit={handleSubmit} className='form-control'>
                        <input 
                            className='w-100'
                            onChange={handleInputChange}
                            value={inputValue}
                            type='text'>
                        </input>
                        <button type='submit' className='btn btn-outline-primary col-12 mt-1'>Add</button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}
