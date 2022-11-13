import './App.css';
import Navbar from './components/Navbar'
import React, { Component } from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import News from './components/News';

export default class App extends Component {
  render() {
    return(
      <>
      <Router>
      <Navbar/>
      <News/>
      </Router>
      </>
    )
  }
}

