import React from 'react';
import './tile.css';

export default function smallTile(props) {
  let mode = props.mode;
  return (<div className={`tile small-tile ${mode}-mode`}>
    <div className="small-tile-section">
      <div className="handle-text">{props.meta.label}</div>
      <div className={`small-tile-total-num ${mode}-mode-text-2`}>{props.meta.total}</div>
    </div>

    <div className="small-tile-section">
      <div>
        <img className="site-icon" src={`../social-media-dashboard/static/images/icon-${props.site}.svg`} />
      </div>
      <div className={'change-in-followers-container ' + (props.meta.percent < 0 ? 'red' : 'green')}>
        {props.change >= 0 ? '/\\' : '\\/'} {props.meta.percent}%
      </div>
    </div>

  </div>);


}