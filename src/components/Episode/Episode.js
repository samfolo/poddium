import React from 'react';
import Classes from './Episode.module.css';

const Episode = props => {
  return (
    <div className={Classes.Episode} data-test="component-episode" />
  );
}

export default Episode;
