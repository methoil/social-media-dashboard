import React from 'react';
import largeTileCss from './large-tile.css';


// props: {
//  name: string
//  site: string, 4 social media sites...
//  total: number (>= 0)
//  change: number, (<= or >= than 0)
// }

export default function largeTile(props) {


  return (
    <div className={`large-tile ${props.site}-border`}>
      <div className="icon-and-handle-container">
        <img src={`../social-media-dashboard/static/images/icon-${props.site}.svg`} />
        <span className="handle-text">{props.name}</span>
      </div>
      <div className="num-followers-container">
        <div className="followers-number">
          {props.total}
        </div>
        <div className="followers-static-text">FOLLOWERS</div>
      </div>
      <div className={'change-in-followers-container ' + (props.change < 0 ? 'red' : 'green')}>
        {props.change >= 0 ? '/\\' : '\\/'} {props.change} Today
      </div>
    </div>
  )

  function getIconPath() {

  }
}

