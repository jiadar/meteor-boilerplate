import React, { Component } from 'react';
import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';
 
import { Route, Switch } from 'react-router-dom';
 
const routes = (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/links' component={Link} />
        <Route path='*' component={NotFound} />
    </Switch>
);
 
class App extends Component {
  constructor(props) {
    super(props);
    Tracker.autorun(() => {
      const isAuthenticated = !!Meteor.userId();
      const pathname = this.props.location.pathname;
      const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
      const isAuthenticatedPage = authenticatedPages.includes(pathname);

      if (isUnauthenticatedPage && isAuthenticated) {
        history.push('/links');
      }

      if (isAuthenticatedPage && !isAuthenticated) {
        history.push('/');
      }
      
    });
  }

  render() {
    return (
      <div>
        {routes}
      </div>
    );
  }
};
 
export default App;
