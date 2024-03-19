import React from 'react'
import './RandomGen.css'
import RandomName from './RandomName'
import RandomPlace from './RandomPlace'




function RandomGen() {
  return (
    <>
        <h3>Random Generator</h3>
        <div id='randomGenDiv'>
        <RandomName />
        <RandomPlace />
        
        </div>
    </>
  )
}

export default RandomGen