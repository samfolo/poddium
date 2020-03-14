import React from 'react';
import Classes from './PageHeading.module.css';

class PageHeading extends React.Component {
  render() {
    return (
      <div className={Classes.PageHeading} data-test="component-page-heading">
        {this.props.children}
      </div>
    );
  }
}

export default PageHeading;
