import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Game from './components/Game';
import NotFound from './components/Shared/NotFound/NotFound';

import history from './history';


const Switches = (props) => (
    <Switch history={history}>
      <Route exact path="/" component={Game}/>

      <Route path="*" component={NotFound}/>
      <Redirect from="*" to="/404"/>
    </Switch>
);

export default Switches;

