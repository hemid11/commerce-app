import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminLogin from './pages/Admin/Login';
import ClientLogin from './pages/Client/Login';
import Routes from './routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/client/login" component={ClientLogin} />
        <Route component={Routes} />
      </Switch>
    </Router>
  );
}

export default App;
