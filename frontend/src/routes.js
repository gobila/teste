import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Cliente from './pages/Clientes'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/cliente' exact component={Cliente}/>
            </Switch>
        </BrowserRouter>
    )
}