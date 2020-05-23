import React from 'react';
import './toggle-mode.css';

// props.mode: light | dark
// props.toggleMode: () => void

export default function toggleMode(props) {
  return (
    <div className={`toggle-mode-switch ${props.mode}-mode`} onClick={props.toggleMode}>
      <span className={`toggle-mode-circle ${getPosition()} ${props.mode}-mode`}></span>
    </div>
  )

  function getPosition() {
    return props.mode === 'light' ? 'right' : 'left';
  }
}