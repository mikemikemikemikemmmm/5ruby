import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from '../components/header'
import Footer from '../components/footer'

import "../assets/style/all.scss"
export default function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path='/'/>
          <Route path='/contact'/>
          <Route path='/post'/>
        </Switch>
      <Footer />
    </Router>
  );
}