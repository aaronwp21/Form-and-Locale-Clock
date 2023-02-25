import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Clock from './pages/Clock';
import Layout from './components/Layout';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/clock' element={<Clock />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
