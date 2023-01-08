import React from 'react';
import './BotaoPadrao.css';

export default function BotaoPadrao(props) {
  return (
    <>
      <button onClick={props.onClick} className='BotaoPadrao'>{props.value}</button>
    </>
  );
}
