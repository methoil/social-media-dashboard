import React from 'react';
import './tile.css';


// props: {
//  name: string
//  site: string, 4 social media sites...
//  total: number (>= 0)
//  change: number, (<= or >= than 0)
// }

export default function largeTile(props) {
  let mode = props.mode;
  return (
    <div className={`tile large-tile ${props.site}-border ${mode}-mode`}>
      <div className="icon-and-handle-container">
        <img src={`../social-media-dashboard/static/images/icon-${props.site}.svg`} />
        <span className={`handle-text ${mode}-mode`}>{props.name}</span>
      </div>
      <div className="num-followers-container">
        <div className={`followers-number ${mode}-mode-text-2`}>
          {props.total}
        </div>
        <div className={`${mode}-mode-text`}>FOLLOWERS</div>
      </div>
      <div className={'change-in-followers-container ' + (props.change < 0 ? 'red' : 'green')}>
        {props.change >= 0 ? '/\\' : '\\/'} {props.change} Today
      </div>
    </div>
  )
}

