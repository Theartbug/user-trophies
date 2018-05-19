import React, { PureComponent } from 'react';
import './trophy.css';

export default class Categories extends PureComponent {

  render() {

    const { emoji, instructions, description } = this.props.trophy;

    return (
      <li className="trophy">
        <span>
          <p>{emoji}</p>
        </span>
        <p>{instructions}</p>
        <p>{description}</p>
      </li>
    );
  }
}