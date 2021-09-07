import React from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

const App = () => {
  return <Router>
    <Switch>
    <Route path="/">
      <Users />
    </Route>
    <Route path="/new">
      <NewPlace />
    </Route>
    </Switch>
  </Router>
}

export default App;
