import React, { Component, PropType } from 'react'
import style from './knob.scss'

export default class Knob extends Component {
  render() {
    return (<div className={style.container}>
      <div className={style.body}>
        <div className={style.cursor} />
      </div>
      knob
    </div>)
  }
}
