import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import './index.css';
import { World } from './templates/World';
import { Hello } from './templates/Hello';
import { Counters } from './templates/Counters';

import { CounterContextProvider } from './contexts/CounterContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/world" component={World} />
        <Route path="/hello" component={Hello} />
        <CounterContextProvider>
          <Route path="/counters" component={Counters} />
        </CounterContextProvider>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
