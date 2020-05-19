import React from 'react';


// props: {
//  name: string
//  site: string, 4 social media sites...
//  total: number (>= 0)
//  change: number, (<= or >= than 0)
// }

export default function largeTile(props) {


  return (
    <div className="large-tile">
      <div className="icon-and-handle-container">
        {props.name}
      </div>
      <div className="num-followers-container">
        <div className="followers-number">
          {props.total}
        </div>
        <div className="followers-text">FOLLOWERS</div>
      </div>
      <div className={'change-in-followers-container' + props.change < 0 ? 'red' : 'green'}>
        {props.change < 0 ? '&#9660' : '&#9650'} {props.change} Today
      </div>
    </div>
  )

}

