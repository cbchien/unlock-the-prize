import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import {
  AuthDemo,
  Landing,
  Tasks,
  Login,
  ForgotPass,
  SignUp,
  About,
  Products,
  Contact,
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
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Landing} />
        <Redirect to="/example" />
      </Switch>
    </Router>
  );
}

export default App;
