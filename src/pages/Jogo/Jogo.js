import React from 'react'
import LogoPadrao from '../../Componentes/LogoPadrao/LogoPadrao'
import UsuarioAvatar from '../../Componentes/UsuarioAvatar/UsuarioAvatar'
import JogoLetraPadrao from '../../JogoLetraPadrao/JogoLetraPadrao'
import useWebSocket from 'react-use-websocket';
import './Jogo.css'
import EntradaPadrao from '../../Componentes/EntradaPadrao/EntradaPadrao'

function Jogo() {

  const { lastJsonMessage, sendMessage } = useWebSocket('ws://localhost:3001', {
  onOpen: () => console.log(`Connected to App WS`),
  onMessage: () => {
    if (lastJsonMessage) {
      console.log(lastJsonMessage);
    }
  },
  onError: (event) => { console.error(event); },
  shouldReconnect: (closeEvent) => true,
  reconnectInterval: 3000
});


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
        <div className='JogoLetrasContainer'>
        <JogoLetraPadrao name='E'/>
        <JogoLetraPadrao name='M'/>
        <JogoLetraPadrao name='R'/>
        </div>
        <div className='JogoDigitarPalavraContainer'>
        <EntradaPadrao placeholder="Digite a palavra..."/>
        </div>
      </div>
      
      <div className='JogoChatContainer'>
        <div className='JogoChat'/>
        <EntradaPadrao placeholder="Fale por aqui..."/>
      </div>
      </div>
    </div>
    </>
  )
}

export default Jogo