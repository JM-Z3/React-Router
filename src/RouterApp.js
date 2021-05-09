import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import { ContextApp } from './components/ContextApp';
import { GifApp } from './components/GifApp/GifApp';
import { HomeScreen } from './components/HomeScreen';
import { ReducerApp } from './components/ReducerApp/ReducerApp';
import { NavBar } from './NavBar';

export const RouterApp = () => {
    return (
        <Router>
            <NavBar />
            <div className='container'>
                <Switch>
                    <Route exact path='/gifapp' component={GifApp}/>
                    <Route exact path='/reducerapp' component={ReducerApp}/>
                    <Route exact path='/contextapp' component={ContextApp}/>

                    <Route path='/' component={HomeScreen}/>
                </Switch>
            </div>
        </Router>
    )
}
