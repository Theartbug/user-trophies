import React, { PureComponent } from 'react';
import trophies from '../../services/trophies.json';

export default class Trophies extends PureComponent {

  parseCategories = (contentArr) => {
    return contentArr.filter(obj => obj.type === 'category').map(obj => { 
      return { [obj.name]: this.parseTrophies(obj.content) }; 
    });

  };

  parseTrophies = (arr) => {
    const filteredArr = [];
    for(let i = 0; i < arr.length; i++) {
      filteredArr.push({ 
        'emoji': arr[i].emoji,
        'instructions':arr[i].instructions,
        'description': arr[i].description
      }); 
    }

    return filteredArr;

  };

  render() {

    const { content } = trophies;
    const { parseCategories } = this;

    const parsed = parseCategories(content);
    console.log(parsed);

    return (
      <div>
      </div>
    );
  }
}