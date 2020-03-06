import React from 'react'

class ShowList extends React.Component {
  renderShows = () => {
    const shows = this.props.shows;
    const showComponents = shows.map(show => {
      return <div 
        key={`${show.id}`}
        data-test="show" />;
    });

    return showComponents;
  }

  render() {
    return (
      <div data-test="component-show-list">
        {this.renderShows()}
      </div>
    )
  }
}

export default ShowList;
