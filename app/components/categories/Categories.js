import React, { PureComponent } from 'react';
import trophies from '../../services/trophies.json';
import Category from './Category';

export default class Categories extends PureComponent {

  parseCategories = (contentArr) => {
    return contentArr.filter(obj => obj.type === 'category').map(obj => { 
      return { 'name': obj.name, 'trophies': this.parseTrophies(obj.content) }; 
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

    return (
      <ul className="categories">
        {parsed.map(category => <Category key={category.name} category={category}/>)}
      </ul>
    );
  }
}