import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import {
  Example,
  AuthDemo,
  Landing,
  Tasks,
  Login,
  ForgotPass,
  SignUp,
  About,
} from './component';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/auth-demo" component={AuthDemo} />
        <Route path="/jobs" component={Tasks} />
        <Route path="/login" component={Login} />
        <Route path="/forgot" component={ForgotPass} />
        <Route path="/signup" component={SignUp} />
        <Route path="/about" component={About} />
        <Route path="/" component={Landing} />
        <Redirect to="/example" />
      </Switch>
    </Router>
  );
}

export default App;
