import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/Shared/NotFound/NotFound';

import history from './history';




const Switches = (props) => (
    <Switch history={history} >
      <Route exact path="/" component={Home}/>

      <Route path="*" component={NotFound}/>
      <Redirect from="*" to="/404"/>
    </Switch>
);

export default Switches;

