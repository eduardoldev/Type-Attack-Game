import React from 'react';
import "./PaginaInicial.css"
import { useNavigate } from "react-router-dom";
import UsuarioAvatar from "../../Componentes/UsuarioAvatar/UsuarioAvatar"
import EntradaPadrao from "../../Componentes/EntradaPadrao/EntradaPadrao"
import BotaoPadrao from "../../Componentes/BotaoPadrao/BotaoPadrao"
import LogoPadrao from '../../Componentes/LogoPadrao/LogoPadrao';
import avatardefault from "../../Media/avatardefault.png"

const userName = "User#" + Math.floor(Math.random() * 1000000)

const PaginaInicial = () =>{
  const navigate = useNavigate()
  const handleEntrar = () => {
    navigate("/jogo")
  }
  return (
    <div className='PaginaInicial'>
      <div className='PaginaInicialLogo'>
      <LogoPadrao/>
      </div>
      
      <div className='PaginaInicialConteudo'>
      <UsuarioAvatar src={avatardefault} alt={"Imagem de "+userName} name={userName}/>
      <EntradaPadrao placeholder="Apelido..."/>
      <BotaoPadrao onClick={handleEntrar} value="Entrar"/>
      </div>
    </div>
  );
}

export default PaginaInicial;