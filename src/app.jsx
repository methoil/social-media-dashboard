import * as React from "react";
import LargeTile from './large-tile/large-tile.jsx';
import data from './data.json';
import './app.css';

export class App extends React.Component {

  render() {
    return (
      <div className="main-container">
        <div class="main-title">Social Media Dashboard</div>
        <div className="dark-mode-text-color">Total Followers: 23,004</div>
        <div className="horizontal-line"></div>

        <div className="dark-mode-container">
          <span className="dark-mode-text-color">Dark Mode</span>
          <span className="toggle-button"></span>
        </div>

        {data.largeTiles.map(tile => {
          return <LargeTile name={tile.name} site={tile.site} total={tile.total} change={tile.change}></LargeTile>
        })}

        <div>Overview - Today</div>

        {data.smallTiles.map((tile) => <div>{tile.site} : {tile.pageViews.total} </div>)}
      </div>
    );
  }
}