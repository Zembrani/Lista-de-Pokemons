import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Pokemon from './components/Pokemon'

const Pagina404 = () => ( <div> pagina 404 </div>)

        ReactDOM.render(
            <BrowserRouter>
                <Switch>
                    <Route path = '/' component = { Home } exact />
                    <Route path = '/pokemon/:id' component = { Pokemon } exact />
                    <Route component = { Pagina404 }/>
                </Switch>
            </BrowserRouter>,
            document.getElementById('root')
        );