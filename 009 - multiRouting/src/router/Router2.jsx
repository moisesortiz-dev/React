import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Contenido1 from "../paginas/Contenido1";
import Contenido2 from "../paginas/Contenido2";
import Contenido3 from "../paginas/Contenido3";
import Router1 from "../router/Router1";




const Router2 = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="contenido1" element={<Contenido1/>}/>
        <Route path="contenido2" element={<Contenido2/>}/>
        <Route path="contenido3" element={<Contenido3/>}/>
        <Route path="/" element={<Navigate to="contenido1"/>}/>
      </Routes>

    </>
  )
}

export default Router2
