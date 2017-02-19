import React, { Component, PropType } from 'react'
import style from './knob.scss'

export default class Knob extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rotation: -120,
    }
  }

  rotate(amount, target) {
    console.log(amount, target)
    let rotation = this.state.rotation + amount
    if (rotation < -120) {
      rotation = -120
    } else if (rotation > 120) {
      rotation = 120
    }
    this.setState({ rotation })
  }

  render() {
    return (<div className={style.container}>
      <div className={style.body}>
        <div
          onWheel={(e) => {
            this.rotate(e.deltaY, e.target)
          }}
          style={{
            transform: `rotate(${this.state.rotation}deg)`,
          }}
          className={style.rotator}
        >
          <div className={style.cursor} />
        </div>
      </div>
    </div>)
  }
}
