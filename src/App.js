import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Newsbox from './components/Newsbox'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar title="MyNewsApp"/> 
        <Routes>
          <Route exact path="/" element={<Newsbox key="general"  country="in" category="general"/>}/> 
          <Route exact path="/business" element={<Newsbox key="business" country="in" category="business"/>}/> 
          <Route exact path="/entertainment" element={<Newsbox key="entertainment" country="in" category="entertainment"/>}/> 
          <Route exact path="/health" element={<Newsbox key="health" country="in" category="health"/>}/> 
          <Route exact path="/science" element={<Newsbox key="science" country="in" category="science"/>}/> 
          <Route exact path="/sports" element={<Newsbox key="sports" country="in" category="sports"/>}/> 
          <Route exact path="/technology" element={<Newsbox key="technology" country="in" category="technology"/>}/> 
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App
