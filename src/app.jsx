import * as React from "react";
import LargeTile from './large-tile.jsx';
import data from './data.json'

export class App extends React.Component {

  render() {
    return (
      <div>
        {data.largeTiles.map(tile => {
          return <LargeTile name={tile.name} site={tile.site} total={tile.total} change={tile.change}></LargeTile>
        })}
      </div>
    );
  }
}