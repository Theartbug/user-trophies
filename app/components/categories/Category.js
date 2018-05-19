import React, { PureComponent } from 'react';
import Trophy from './Trophy';
import Chevron from 'react-icons/lib/md/chevron-right'
import './category.css';

export default class Categories extends PureComponent {

  state = {
    open: false
  };

  changeVisible = () => {
    const { open } = this.state;

    this.setState({ open: !open});
  }

  render() {

    const { name, trophies } = this.props.category;
    const { changeVisible } = this;
    const { open } = this.state;

    return (
      <li className="category">
        <div className="header">
          <h1>{name}</h1>
          <button type="button" onClick={changeVisible}>See All <Chevron className={`${open === true ? 'active' : ''}`}/></button>
        </div>
        <ul>
          {trophies.map((trophy, i) => <Trophy key={i} trophy={trophy}/>)}
        </ul>
      </li>
    );
  }
}