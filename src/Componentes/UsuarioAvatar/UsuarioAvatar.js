import React from 'react';
import './UsuarioAvatar.css';

export default function UsuarioAvatar(props) {
  return (
    <div className='UsuarioAvatarContainer'>
      <span className='UsuarioAvatarNome'>{props.name}</span>
      <img className='UsuarioAvatar' src={props.src} alt={props.alt}></img>
    </div>
  );
}
