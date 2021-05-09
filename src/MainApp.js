import React, { useState } from 'react'
import { RouterApp } from './RouterApp'
import { UserContext } from './UserContext'

export const MainApp = () => {


    const [user, setUser] = useState({});
    const [search, setSearch] = useState([]);



    return (
        <UserContext.Provider value={{
            user,
            setUser,
            search,
            setSearch
        }}>
                        <RouterApp />
        </UserContext.Provider>
    )
}
