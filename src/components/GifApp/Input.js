import React, { useState } from 'react'

export const Input = ({setSearch}) => {


    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(ss => [inputValue]);
        setInputValue('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
                className='gif-input'>
            </input>
        </form>
    )
}
