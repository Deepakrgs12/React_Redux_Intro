
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productdetails from './components/Productdetails';
import Nav from './components/Nav';
import Productlist from './components/Productlist';


function App() {
  return (
  
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route exact path="/" element={<Productlist />}/>
       
          <Route path="Product/:id" element={<Productdetails />} />
         
       
      </Routes>
    </BrowserRouter>);
}

export default App;
