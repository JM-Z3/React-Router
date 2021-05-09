import React, { useContext } from 'react'
import { UserContext } from '../UserContext'


export const ContextApp = () => {

    const {user, setUser} = useContext(UserContext);



    const handleChange = () => {
        setUser({
            id:new Date().getTime(),
            name: 'Garfield',
            food: 'Lasagna'
        })
    }

    const handleDelete = () => {
        setUser({});
    }
    return (
        <div>
            <h1>Context App</h1>
            <hr/>
            <div className='column'>
                <button onClick={handleChange} className='btn btn-outline-primary m-5'>Something in the object</button>
                <button onClick={handleDelete} className='btn btn-danger m-5'>Delete object</button>

                {
                    JSON.stringify(user,null,3)
                }

            </div>

        </div>
    )
}
