// import React, { useState } from "react"

function TemeperatureInput({temperature,handleTemperatureChange}) {
    

  return (
    <label htmlFor="">Enter Temperature 
    <input type="number" value={temperature} onChange={(e)=>handleTemperatureChange(e.target.value)}></input>
    </label>
  )
}

export default TemeperatureInput