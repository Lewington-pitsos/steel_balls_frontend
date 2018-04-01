import React from 'react'

import Arrow from './Carousel/Arrow'
import State from './Carousel/State'
import Selection from './Carousel/Selection'
import CarouselNode from './Carousel/CarouselNode'

export default class Carousel extends React.Component {
  singleNode(info, key) {
    return (
      <CarouselNode selectable={this.selectableNode()} key={key} index={key}>
        {this.props.stateNode ? <State info={info} /> : <Selection info={info} key={key} />}
      </CarouselNode>
    )
  }

  selectableNode() {
    return !(this.props.first || this.props.lastSelection)
  }

  allNodes() {
    return this.props.nodes.map((node_info, index) => this.singleNode(node_info, index) )
  }

  possibleArrow() {
    return this.props.nodes.length > 1 ? <Arrow /> : null
  }

  title() {
    return this.props.stateNode ? 'Current Balls' : 'Current Weigh'
  }

  render() {

    const width = this.props.first ? '11' : '8'
    return (
      <div className='carousel'>
        <h2>{this.title()}</h2>
        <div className='row justify-content-center'>
          {this.possibleArrow()}
          <div className={ 'col-' + width }>
            {this.allNodes()}
          </div>
          {this.possibleArrow()}
        </div>
      </div>
    );
  }
}
