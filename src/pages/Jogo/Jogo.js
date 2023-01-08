import React from 'react'
import LogoPadrao from '../../Componentes/LogoPadrao/LogoPadrao'
import UsuarioAvatar from '../../Componentes/UsuarioAvatar/UsuarioAvatar'
import JogoLetraPadrao from '../../JogoLetraPadrao/JogoLetraPadrao'
import './Jogo.css'
function Jogo() {
  return (
    <>
    <div className='JogoContainer'>
    <div className='PaginaInicialLogo'>
      <LogoPadrao/>
      </div>
      <div className='JogoPrincipalContainer'>
      <div className='JogoJogadores'>
      <UsuarioAvatar name="Jubileu#2123"/>
      <UsuarioAvatar name="Joaquim#4567"/>
      <UsuarioAvatar name="Teste#9875"/>
      <UsuarioAvatar name="Teste#6521"/>
      </div>
      <div className='JogoPalavraContainer'>
        <JogoLetraPadrao name='E'/>
        <JogoLetraPadrao name='M'/>
        <JogoLetraPadrao name='R'/>
      </div>
      </div>
    </div>
    </>
  )
}

export default Jogo