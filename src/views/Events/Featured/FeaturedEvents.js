import React, { Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './FeaturedEvents.scss'
import Link from '../../Link'

class FeaturedEvents extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.imageHolder}>
          <div className={s.imageDisplay}>
            <i style={{ textShadow: '2px 2px 3px #807be2' }} className="fa fa-moon-o fa-4x" />
          </div>
        </div>
        <div className={s.infoHolder}>
          <div className={s.eventTypeDisplay}>
            Full Moon
          </div>
          <div className={s.eventLocationDisplay}>
            14&deg; Cancer
          </div>
          <div className={s.eventTimeDisplay}>
            Saturday, March 5, 2016, 10am CST
          </div>
          <div className={s.eventDescription}>
            Full moon in Cancer blah blah
            Full moon in Cancer blah blah
            Full moon in Cancer blah blah
          </div>

        </div>

      </div>
    )
  }

}

export default withStyles(FeaturedEvents, s)
