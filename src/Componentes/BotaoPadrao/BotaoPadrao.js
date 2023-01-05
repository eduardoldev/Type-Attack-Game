import React from 'react';
import './BotaoPadrao.css';

export default function BotaoPadrao(props) {
  return (
    <>
      <span className='BotaoPadrao'>{props.children}</span>
    </>
  );
}
