import React from 'react';
import Classes from './Show.module.css';

const Show = props => {
  return (
    <div className={Classes.Show} data-test="component-show">
      <div className={Classes.Content}>
        <h1 data-test="name" className={Classes.Name}>{props.name}</h1>
        <div data-test="publisher" className={Classes.Publisher}>{props.publisher}</div>
        <img data-test="image" className={Classes.Image} src={props.image.url} alt={props.name} />
        <div data-test="description" className={Classes.Description}>{props.description}</div>
      </div>
    </div>
  )
}

export default Show;