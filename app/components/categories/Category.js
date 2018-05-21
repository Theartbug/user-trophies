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


  render() {

    const { name, trophies } = this.props.category;
    const { changeVisible } = this;
    const { open } = this.state;

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
            trophies.map((trophy, i) => <Trophy key={i} trophy={trophy}/>)
            :
            trophies.map((trophy, i) => <Trophy key={i} trophy={trophy} classData={'short-li'}/>)
          }
        </ul>
      </li>
    );
  }
}