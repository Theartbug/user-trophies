import React, { PureComponent } from 'react';
import Trophy from './trophy/Trophy';
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

  calculateLength = () => {

  };

  render() {

    const { name, trophies } = this.props.category;
    const { changeVisible } = this;
    const { open } = this.state;
    //create a new array and shorten it. If did not create a new array, would point to the same place and edit the original array.
    const shortenedTrophies = trophies.slice();
    // const length = calculateLength();
    shortenedTrophies.length = 4;

    const visibleTrophies = open ? trophies : shortenedTrophies;

    return (
      <li className="category">
        <div className="header">
          <h1>{name}</h1>
          {open 
            ? <button type="button" onClick={changeVisible}>See Less <Chevron className={`${open ? 'active' : ''}`}/></button>
            : <button type="button" onClick={changeVisible}>See More<Chevron className={`${open ? 'active' : ''}`}/></button>
          }
        </div>
        
        <ul className="trophies">
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