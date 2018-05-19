import React, { PureComponent } from 'react';
import Trophies from './Trophies';

export default class Categories extends PureComponent {

  render() {

    const { name, trophies } = this.props.category;

    return (
      <li>
        <h1>{name}</h1>
        <ul>
          {trophies.map((trophy, i) => <Trophies key={i} trophy={trophy}/>)}
        </ul>
      </li>
    );
  }
}