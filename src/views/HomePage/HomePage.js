import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HomePage.scss';

import FeaturedEvents from '../Events/Featured'
import EventsBox from '../Events/Box'
import CurrentEvents from '../Events/Current'

const title = 'Astro App';

class HomePage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
        <FeaturedEvents />
        <EventsBox />
        <CurrentEvents />
  {/*        <h1>{title}</h1>
          <p>...</p>*/}
        </div>
      </div>
    );
  }

}

export default withStyles(HomePage, s);
