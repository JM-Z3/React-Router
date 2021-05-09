import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'
import { Grid } from './Grid';
import { Input } from './Input'



export const GifApp = () => {

    const {search, setSearch} = useContext(UserContext);


    return (
        <div>
            <h1>GifApp</h1>
            <Input setSearch={setSearch} />
            <hr/>
            <div>

                {
                    search.map(search => {
                        return <Grid key={search} search={search}/>
                    })
                }
            </div>

        </div>
    )
}
