/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';

import {BrowserRouter,Route, Routes} from 'react-router-dom';




function App() {

  const [mode, setmode] = useState('light') //whether dark mode is enable or not

  const toggleMode = () => {
    if (mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'lightgrey'
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white'
    }

  }

  return ( 
    
      <BrowserRouter>
        
            <Navbar title='TextUtiles' about='About' mode = {mode} toggleMode = {toggleMode}></Navbar>

            <Routes>
              <Route path='/' element = {<TextForm heading = 'Enter the text below to analyze' mode = {mode} />}/>
              <Route path='/about' element = {<About mode = {mode}/>}></Route>

            </Routes>
      </BrowserRouter>


)
}


export default App;
