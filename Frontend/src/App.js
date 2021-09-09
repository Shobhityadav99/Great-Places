import React, { useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const [isLoggedIn,setisLoggedIn] = useEffect(false);
  const login = useCallback(()=>{
    setisLoggedIn(true);
  },[]);
  const logout = useCallback(()=>{
    setisLoggedIn(false);
  },[])
  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn,login: login,logout: logout}}>
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <Users />
            </Route>
            <Route path="/:userId/places" exact>
              <UserPlaces />
            </Route>
            <Route path="/places/new" exact>
              <NewPlace />
            </Route>
            <Route path="/places/:placeId">
              <UpdatePlace />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
          </Switch>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
