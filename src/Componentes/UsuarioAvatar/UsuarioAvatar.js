import React, { useState } from 'react';
import './UsuarioAvatar.css';

export default function UsuarioAvatar(props) {
  return (
    <div className='UsuarioAvatarContainer'>
      <img className='UsuarioAvatar' src={props.src}></img>
      <span className='UsuarioAvatarNome'>{props.name}</span>
    </div>
  );
}
