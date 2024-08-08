import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from './components/NasaPhoto';
import './App.css';

function App() {
  return (
     
       <Routes >
      <Route element={ <Home />} path="/" exact />
      <Route element={ <NasaPhoto /> } path="/nasaphoto" />
      </Routes> 

     
    
  );
}

export default App;
