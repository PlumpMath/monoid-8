import React, { Component, PropTypes } from 'react'
import style from './knob.scss'

export default class Knob extends Component {
  static MIN_ROTATION = -120
  static MAX_ROTATION = 120

  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    label: PropTypes.string,
    showValue: PropTypes.bool,
  }

  static defaultProps = {
    min: 0,
    max: 127,
    step: 1.0,
    label: null,
    showValue: false,
  }

  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      rotation: -120,
    }
  }

  rotate(amount) {
    let rotation = this.state.rotation + amount
    if (rotation < Knob.MIN_ROTATION) {
      rotation = Knob.MIN_ROTATION
    } else if (rotation > Knob.MAX_ROTATION) {
      rotation = Knob.MAX_ROTATION
    }

    const rRange = Knob.MAX_ROTATION - Knob.MIN_ROTATION
    const r = (rotation - Knob.MIN_ROTATION) / rRange
    let value = (this.props.max - this.props.min) * r + this.props.min
    value = Math.round(value / this.props.step) * this.props.step
    this.setState({ rotation, value })
  }

  render() {
    return (<div className={style.container}>
      {this.props.label ?
        (<div className={style.label}>{this.props.label}</div>) : null}
      <div className={style.body}>
        <div
          onWheel={(e) => {
            this.rotate(e.deltaY)
          }}
          style={{
            transform: `rotate(${this.state.rotation}deg)`,
          }}
          className={style.rotator}
        >
          <div className={style.cursor} />
        </div>
      </div>
      {this.props.showValue ?
        (<div className={style.valuePreview}>{this.state.value}</div>) : null}
    </div>)
  }
}
