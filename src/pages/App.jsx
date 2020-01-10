import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from '../components/header'
import Footer from '../components/footer'

import Contact from './contact'
import Post from './post'
import Index from './index'

import "../assets/style/all.scss"

export default function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path='/' render={() => <Index/>}/>
          <Route path='/contact' render={() => <Contact/>} />
          <Route path='/post' render={() => <Post/>} />
        </Switch>
      <Footer />
    </Router>
  );
}