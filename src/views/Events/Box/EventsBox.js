import React, { Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './EventsBox.scss'
import Link from '../../Link'

class EventsBox extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.box}>
          test
        </div>
        <div className={s.box}>
          test
        </div>
        <div className={s.box}>
          test
        </div>
      </div>
    )
  }

}

export default withStyles(EventsBox, s)
