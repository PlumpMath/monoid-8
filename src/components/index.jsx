import React, { Component } from 'react'
import { Card, CardText } from 'material-ui/Card'

export default class IndexComponent extends Component {
  render() {
    return (<div>
      <div className="reakt-header">
        <h1>mono:id</h1>
        <div className="reakt-header__subtitle">Monophonic Web Synthesizer</div>
      </div>
      <Card>
        <CardText>
          empty
        </CardText>
      </Card>
    </div>)
  }
}
