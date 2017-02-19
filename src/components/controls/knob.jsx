import React, { Component, PropType } from 'react'
import style from './knob.scss'
console.log(style)

export default class Knob extends Component {
  render() {
    return (<div className={style['knob-container']}>knob</div>)
  }
}
