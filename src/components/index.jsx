import React, { Component } from 'react'
import { Card, CardText } from 'material-ui/Card'

import Knob from 'components/controls/knob'

export default class IndexComponent extends Component {
  render() {
    return (<div>
      <div className="monoid-header">
        <h1>mono<span className="accent">:</span>id</h1>
        <div className="monoid-header__subtitle">Monophonic Web Synthesizer</div>
      </div>
      <Card>
        <CardText>
          <Knob label="param1" showValue unit="pts" />
          <Knob label="param2" showValue />
          <Knob label="param3" showValue />
        </CardText>
      </Card>
    </div>)
  }
}
