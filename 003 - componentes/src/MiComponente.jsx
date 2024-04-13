import React from 'react'

export default function MiComponente({rey}) {
  return (
    <div>
      <h1>Hola {rey.nombre} come {rey.reses} vacas al dia</h1>
    </div>
  )
  }
  MiComponente.defaultProps ={
    rey: "Rey Godo",
    reses: "pocas"
  }


