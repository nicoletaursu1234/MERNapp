import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../style/styles.css'

import {Login, Signup, Contacts, Products, Articles, Forum, HomeContent, About } from '../pages'


function App() {
  return (
    <Router> 
            
            <Switch>
                <Route path="/products" exact component={Products}/>
                <Route path="/articles" exact component={Articles}/>
                <Route path="/forum" exact component={Forum}/>
                <Route path="/contacts" exact component={Contacts}/>
                <Route path="/" exact component={HomeContent}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/about" exact component={About}/>
            </Switch>
    </Router>
  );
}

export default App;
