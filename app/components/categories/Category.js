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

    this.setState({ open: !open });
  };

  render() {

    const { name, trophies } = this.props.category;
    const { changeVisible } = this;
    const { open } = this.state;
    //create a new array and shorten it
    const shortenedTrophies = trophies.slice();
    shortenedTrophies.length = 5;

    const visibleTrophies = open ? trophies : shortenedTrophies;

    return (
      <li className="category">
        <div className="header">
          <h1>{name}</h1>
          <button type="button" onClick={changeVisible}>See All <Chevron className={`${open ? 'active' : ''}`}/></button>
        </div>
        <ul>
          {open ?
            visibleTrophies.map((trophy, i) => <Trophy key={i} trophy={trophy}/>)
            :
            visibleTrophies.map((trophy, i) => <Trophy key={i} trophy={trophy}/>)
          }

        </ul>
      </li>
    );
  }
}