import React, { useState } from "react";
import LargeTile from './components/large-tile.jsx';
import SmallTile from './components/small-tile.jsx';
import ToggleMode from './components/toggle-mode.jsx';
import data from './data.json';
import './app.css';

export default function SocialMediaDashboard() {

  const [mode, setMode] = useState('dark');
  const toggleMode = () => { setMode(mode === 'light' ? 'dark' : 'light'); };

  return (
    <div className={`main-container ${mode}-mode`}>
      <div className={`title ${mode}-mode-text-2`}>Social Media Dashboard</div>
      <div className={`${mode}-mode-text`}>Total Followers: 23,004</div>
      <div className="horizontal-line"></div>

      <div className="toggle-mode-container">
        <span className={`mode-label ${mode}-mode-text`}>{mode} Mode</span>
        <ToggleMode mode={mode} toggleMode={toggleMode} ></ToggleMode>
      </div>

      {data.largeTiles.map(tile => {
        return <LargeTile name={tile.name} site={tile.site} total={tile.total} change={tile.change} mode={mode}></LargeTile>
      })}

      <div className={`title ${mode}-mode-text-2`}>Overview - Today</div>

      {data.smallTiles.map((tile) => {
        return (<span>
          <SmallTile site={tile.site} meta={tile.actions} mode={mode} ></SmallTile>
          <SmallTile site={tile.site} meta={tile.likes} mode={mode} ></SmallTile>
        </span>)
      })}
    </div>
  );
}