import "./App.css";
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Modelo from "./reyes/Modelo";
import Home from "./reyes/Home";
import Error404 from "./reyes/Error404";
import Nav from "./reyes/Nav";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
      <Route path="/reyes/:rey" element={<Modelo/>}></Route>
      <Route path="/*" element={<Error404/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

