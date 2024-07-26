import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../paginas/Login";
import Recuperacion from "../paginas/Recuperacion";
import Router2 from "./Router2";
import RutasPublicas from "./RutasPublicas";
import RutasPrivadas from "./RutasPrivadas";


const Router1 = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={
          <RutasPublicas>
            <Login />
          </RutasPublicas>
        } />
        <Route path="recuperacion" element={
          <RutasPublicas>
            <Recuperacion />
          </RutasPublicas>
        } />
        <Route path="/*" element={
          <RutasPrivadas>
            <Router2 />
          </RutasPrivadas>
        } />
      </Routes>
    </>
  )
}

export default Router1
