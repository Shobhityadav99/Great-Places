import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return <Router>
    <MainNavigation />
    <main>
      <Switch>
        <Route path="/">
          <Users />
        </Route>
        <Route path="/places/new">
          <NewPlace />
        </Route>
      </Switch>
    </main>
  </Router>
}

export default App;
