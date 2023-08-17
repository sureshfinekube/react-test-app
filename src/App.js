import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UsersPage from './UsersPage';
import ProductsPage from './ProductsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/users">
          <UsersPage />
        </Route>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/">
          {/* Default route */}
          <UsersPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
