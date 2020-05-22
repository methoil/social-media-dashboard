import * as React from "react";
import LargeTile from './components/large-tile.jsx';
import SmallTile from './components/small-tile.jsx';
import data from './data.json';
import './app.css';

export class App extends React.Component {

  render() {
    return (
      <div className="main-container">
        <div class="dark-mode-title">Social Media Dashboard</div>
        <div className="dark-mode-text-color">Total Followers: 23,004</div>
        <div className="horizontal-line"></div>

        <div className="dark-mode-container">
          <span className="dark-mode-text-color">Dark Mode</span>
          <span className="toggle-button"></span>
        </div>

        {data.largeTiles.map(tile => {
          return <LargeTile name={tile.name} site={tile.site} total={tile.total} change={tile.change}></LargeTile>
        })}

        <div className="dark-mode-title">Overview - Today</div>

        {data.smallTiles.map((tile) => {
          return (<span>
            <SmallTile site={tile.site} meta={tile.actions} ></SmallTile>
            <SmallTile site={tile.site} meta={tile.likes} ></SmallTile>
          </span>)
        })}
      </div>
    );
  }
}