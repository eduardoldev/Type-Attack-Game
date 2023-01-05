import React from 'react';
import './EntradaPadrao.css';

export default function EntradaPadrao(props) {
  return (
    <>
      <input
        type={props.type}
        className='EntradaPadrao'
        placeholder={props.placeholder}
      ></input>
    </>
  );
}
