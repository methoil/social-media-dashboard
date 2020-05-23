import React from 'react';
import './toggle-mode.css';

// props.mode: light | dark
// props.toggleMode: () => void

export default function toggleMode(props) {
  return (
    <div className='toggle-mode-switch' onClick={props.toggleMode}>
      <span className={`toggle-mode-circle ${getPosition()}`}></span>
    </div>
  )

  function getPosition() {
    return props.mode === 'light' ? 'right' : 'left';
  }
}