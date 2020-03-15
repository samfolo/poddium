import React from 'react'
import Show from '../Show/Show';
import Classes from './ShowList.module.css';
import { Redirect } from 'react-router';

class ShowList extends React.Component {

  renderShows = () => {
    const shows = this.props.shows;
    const showComponents = shows.map(show => {
      return <Show 
        key={`${show.id}`}
        data-test="show"
        name={show.name}
        image={show.image}
        marginBottom="15px"
        description={show.description}
        overlayImage="/podcast-microphone-overlay.png"
        onClick={() => this.props.onClick(show, this.props.route)}
        publisher={show.publisher} />;
    });

    return showComponents;
  }

  render() {
    return (
      <div data-test="component-show-list" className={Classes.ShowList}>
        {this.renderShows()}
      </div>
    )
  }
}

export default ShowList;
