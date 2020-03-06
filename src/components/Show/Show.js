import React from 'react';
import Classes from './Show.module.css';

const Show = props => {
  return (
    <div className={Classes.Show} data-test="component-show">
      <h1 data-test="name">{props.name}</h1>
      <img data-test="image" src={props.image.url} alt={props.name} />
      <div data-test="description">{props.description}</div>
      <div data-test="publisher">{props.publisher}</div>
    </div>
  )
}

export default Show;