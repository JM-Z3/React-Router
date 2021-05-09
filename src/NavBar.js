import React from 'react'
import { NavLink } from 'react-router-dom';
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink activeClassName='active' className="navbar-brand" to="/">Repository</NavLink>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink activeClassName='active' className="nav-link" aria-current="page" to="/gifapp">GifApp</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeClassName='active' className="nav-link" to="/reducerapp">ReducerApp</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeClassName='active' className="nav-link" to="/contextapp">ContextApp</NavLink>
                    </li>

                </ul>
                </div>
            </div>
        </nav>
    )
}
