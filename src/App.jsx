import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {routes} from './routes.js'
import { Navbar } from './cmps/Navbar'

export function App() {

  return (
    <div className="App">
      <Navbar/>
      <Switch>
        { routes.map(route => <Route key={ route.path } exact component={ route.component } path={ route.path } />) }
      </Switch>
    </div>
  )
}

