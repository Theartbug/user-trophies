import React, { PureComponent } from 'react';

export default class Categories extends PureComponent {

  render() {

    const { emoji, instructions, description } = this.props.trophy;

    return (
      <li>
        <pre>{emoji}</pre>
        <p>{instructions}</p>
        <p>{description}</p>
      </li>
    );
  }
}