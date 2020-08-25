import React from 'react';
import './App.css';
import Container from "@material-ui/core/Container";
import MenuAppBar from "./component/MenuAppBar";
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import MainContent from "./pages/MainContent";
import Plane from "./pages/Plane";
import NotFound from "./pages/NotFound";
import GedData from "./pages/GetData";
import GedQueryData from "./pages/GetQueryData";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  let query = useQuery();
  let authState = false;
  const onLogin = () => {
    console.log('login suru')
    authState = true
    console.log(authState)
  }
  const onLogout = () => {
    console.log('logout suru')
    authState = false
    console.log(authState)
  }
  return (
      <div className="App">
        <Container>
          <MenuAppBar title='manual pages' isAuth={authState} onLogin={onLogin} onLogout={onLogout} />
          <Switch>
            <Route exact path='/' component={MainContent} />
            <Route path='/plane' component={Plane} />
            <Route path='/data/:id' component={GedData} />
            <Route path='/query'>
              <GedQueryData token={query.get('token')}/>
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </Container>
      </div>
  );
}

export default App;
