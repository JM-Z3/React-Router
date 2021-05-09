import React, { useContext } from 'react'
import { UserContext } from '../UserContext';

export const HomeScreen = () => {
    
    
    const {setUser, setSearch} = useContext(UserContext);

    const handleChange = () => {
        setUser({
            id:'8==D',
            name:'Your Sister',
            food:'Pizza'
        });
    }

    const messi = () => {
        setSearch(st => ['Messi']);
    }

    const homer = () => {
        setSearch(st => ['Homer']);
    }

    const bart = () => {
        setSearch(st => ['Bart']);
    }

    
    return (
        <div>
            <div className='flex row mt-5 '>
                <h1 className='col-7'>HomeScreen</h1>
                <p className='col-5 fs-10'>Welcome to my sample page and practice enviroment. Hope you enjoy my works!</p>
            </div>

            <hr/>
            <hr />

            <div>
                <h4>Button for changing the state of my ContextApp</h4>
                <button onClick={handleChange} className='btn btn-warning'>Press me and go to see ContextApp!</button>
            </div>

            <hr/>
            <hr />

            <div>
                <h4>Buttons for search images in GifApp (using context)</h4>
                <button onClick={messi} className='btn btn-danger m-3'>Messi</button>
                <button onClick={homer} className='btn btn-danger m-3'>Homer</button>
                <button onClick={bart} className='btn btn-danger m-3'>Bart</button>

            </div>


        </div>
    )
}
