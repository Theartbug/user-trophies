import React, { PureComponent } from 'react';
import Categories from '../categories/Categories';
import './app.css';

export default class App extends PureComponent {

  render() {

    return (
      <main className="main" role="main">
        <Categories/>
      </main>
    );
  }
}