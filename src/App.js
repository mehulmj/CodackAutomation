import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard.js';
import Login from './Login.js'
import HomePage from './HomePage.js';
import SignUp from './SignUp.js';
import ForgotPassword from './ForgotPassword.js';
import WebServer from './WebServer.js';
import Docker from './Docker.js';
import Operations from './Operations.js';
import Cookies from './Cookies.js';

import { Route,BrowserRouter, Switch } from 'react-router-dom';
function App() {
  return (
    <div className>
        <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/Dashboard"} component={Dashboard} />
          <Route exact path ={"/Login"} component={Login} />
          <Route exact path ={"/SignUp"} component={SignUp} />
          <Route exact path ={"/ForgotPassword"} component={ForgotPassword} />
          <Route exact path ={"/WebServer"} component={WebServer} />
          <Route exact path ={"/Docker"} component={Docker} />
          <Route exact path ={"/Operations"} component={Operations} />
          <Route exact path ={"/Cookies"} component={Cookies} />

        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
