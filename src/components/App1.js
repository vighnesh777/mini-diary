import React from 'react';
import {BrowserRouter ,Route} from 'react-router-dom';
import App from '../components/App/App';
import Login from '../components/Login/Login';
import Home from '../components/Home/Home';
const App1=()=>
{
    
        return(
            <BrowserRouter>
                <Route path="/" component={App} exact/>
                <Route path="/login" component={Login} exact/>
                <Route path="/home" component={Home} exact/>

            </BrowserRouter>
        )
}
