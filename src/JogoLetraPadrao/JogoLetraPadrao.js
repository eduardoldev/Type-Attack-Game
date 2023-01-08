import React from 'react'
import './JogoLetraPadrao.css'

function JogoLetraPadrao(props) {
  return (
    <div className='JogoLetraPadraoContainer'>
        <span className='JogoLetraPadraoLetra'>{props.name}</span>
    </div>
  )
}

export default JogoLetraPadrao