import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../style/styles.css'
import { Login, AdminPanel, AdminProducts, 
         AdminArticles, Signup, Contacts, 
         Products, Articles, Forum, HomeContent, 
         About } from '../pages'
import { AuthContext } from '../Context/AuthContext';

import PrivateRoute from '../hocs/PrivateRoute';
import UnPrivateRoute from '../hocs/UnPrivateRoute';

function App() {
  const { user } = useContext(AuthContext)
  console.log(user)

  return (
    <Router >
      <Switch >
        <Route path="/" exact component={HomeContent} />
        <Route path="/products" exact component={Products} />
        <Route path="/articles" exact component={Articles} />
        <Route path="/forum" exact component={Forum} />
        <Route path="/contacts" exact component={Contacts} />
        <Route path="/about" exact component={About} />

        <UnPrivateRoute path="/login" component={Login} />
        <UnPrivateRoute path="/signup" component={Signup} />

        <PrivateRoute path="/forum" roles={["user"]} component={Forum} />


        <PrivateRoute path="/admin/panel" roles={["admin"]} component={AdminPanel} />

        <PrivateRoute path="/admin/products" roles={["admin"]} component={AdminProducts} />
        <PrivateRoute path="/admin/products/delete" roles={["admin"]} component={AdminProducts} />

        <PrivateRoute path="/admin/articles" roles={["admin"]} component={AdminArticles} />
        <PrivateRoute path="/admin/articles/delete" roles={["admin"]} component={AdminArticles} />

        <PrivateRoute path="/admin/forum" roles={["admin"]} component={AdminArticles} />
      </Switch>
    </Router>
  );
}

export default App;
