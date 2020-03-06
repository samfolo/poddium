import React from 'react'
import Show from '../Show/Show';

class ShowList extends React.Component {
  renderShows = () => {
    const shows = this.props.shows;
    const showComponents = shows.map(show => {
      return <Show 
        key={`${show.id}`}
        data-test="show"
        name={show.name}
        image={show.image}
        description={show.description}
        publisher={show.publisher} />;
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
