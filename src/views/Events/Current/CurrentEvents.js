import React, { Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './CurrentEvents.scss'
import Link from '../../Link'

class CurrentEvents extends Component {

  render() {
    return (
      <div className={s.root}>
      <div>
        <img src={require('../../../images/icons/zodiac/line/aries.svg')} />
      </div>
      <div>
        <img src={require('../../../images/icons/zodiac/line/gemini.svg')} />
        </div>
        <div>
        <img src={require('../../../images/icons/zodiac/line/cancer.svg')} />
        </div>
        <div>
        <img src={require('../../../images/icons/zodiac/line/leo.svg')} />
        </div>
        <div>
        <img src={require('../../../images/icons/zodiac/line/virgo.svg')} />
        </div>
        <div>
        <img src={require('../../../images/icons/zodiac/line/libra.svg')} />
        </div>
        <div>
        <img src={require('../../../images/icons/zodiac/line/scorpio.svg')} />
        </div>
        <div>
        <img src={require('../../../images/icons/zodiac/line/sagittarius.svg')} />
        </div>
        <div>
        <img src={require('../../../images/icons/zodiac/line/capricorn.svg')} />
        </div>
        <div>
        <img src={require('../../../images/icons/zodiac/line/aquarius.svg')} />
        </div>
        <div>
        <img src={require('../../../images/icons/zodiac/line/pisces.svg')} />
      </div>
      </div>
    )
  }

}

export default withStyles(CurrentEvents, s)
