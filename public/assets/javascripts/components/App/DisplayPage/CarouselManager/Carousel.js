import React from 'react'

import Arrow from './Carousel/Arrow'
import State from './Carousel/State'
import Selection from './Carousel/Selection'
import CarouselNode from './Carousel/CarouselNode'
import { CSSTransitionGroup } from 'react-transition-group'

export default class Carousel extends React.Component {
  constructor() {
    super()

    this.state = { index: 0 }
  }

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

  possibleArrow(right, callback) {
    return this.props.nodes.length > 1 ? <Arrow right={right} callback={callback}/> : null
  }

  title() {
    return this.props.stateNode ? 'Current Balls' : 'Current Weigh'
  }

  nextNode() {
    this.setState({ index: this.state.index + 1 })
  }

  prevNode() {
    this.setState({ index: this.state.index - 1 })
  }

  render() {

    const nodes = this.allNodes()[this.state.index || 0]

    const width = this.props.first ? '11' : '8'
    return (
      <div className='carousel'>
        <h2>{this.title()}</h2>
        <div className='row justify-content-center'>
          {this.possibleArrow(false, this.prevNode.bind(this))}
          <div className={ 'node-holder col-' + width }>
            <CSSTransitionGroup
              transitionName={'node'}
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}>
            {nodes}
            </CSSTransitionGroup>
          </div>
          {this.possibleArrow(true, this.nextNode.bind(this))}
        </div>
      </div>
    );
  }
}
