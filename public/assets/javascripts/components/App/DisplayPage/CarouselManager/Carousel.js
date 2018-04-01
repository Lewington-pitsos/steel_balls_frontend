import React from 'react'

import Arrow from './Carousel/Arrow'
import State from './Carousel/State'
import Selection from './Carousel/Selection'

export default class Carousel extends React.Component {
  constructor() {
    super()
  }

  singleNode(info, key) {
    return this.props.stateNode ? <State info={info} key={key} /> : <Selection info={info} key={key} />
  }

  generateNodes() {
    return this.props.nodes.map((node_info) => this.singleNode(node_info, 3) )
  }

  possibleArrow() {
    return this.props.nodes.length > 1 ? <Arrow /> : null
  }

  render() {
    return (
      <div className='carousel'>
        <div className='row'>
          {this.possibleArrow()}
          <div className='col-8'>
            {this.generateNodes()}
          </div>
          {this.possibleArrow()}
        </div>
      </div>
    );
  }
}
