import React from 'react'

import Arrow from './Carousel/Arrow'
import State from './Carousel/State'
import Selection from './Carousel/Selection'
import CarouselNode from './Carousel/CarouselNode'
import carouselStore from '../../../../stores/CarouselStore'
import carouselActions from '../../../../actions/carouselActions'
import { CSSTransitionGroup } from 'react-transition-group'


export default class Carousel extends React.Component {
  constructor() {
    super()

    this.state = carouselStore.getState()
    this.updateState = this.updateState.bind(this)
  }

  nextNode() {
    carouselActions.nextNode()
  }

  prevNode() {
    carouselActions.previousNode()
  }

  newCarousel() {
    carouselActions.newCarousel(this.props.nodes.length)
  }

  updateState() {
    this.newCarousel()
    this.setState( carouselStore.getState() )
  }

  componentWillMount() {
    carouselStore.addListener( 'changeState', this.updateState )
  }

  componentWillUnmount() {
    carouselStore.removeAllListeners( 'changeState' )
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

  className(reverse) {
    return (
      'carousel ' +
      reverse ? 'reverse-order ' : null +
      this.props.first ? 'first' : null
    )
  }

  leftArrow() {
    if (this.state.index > 0 ) {
      return this.possibleArrow(false, this.prevNode.bind(this))
    }
  }

  rightArrow() {
    if (this.props.nodes.length - 1 > this.state.index) {
      return this.possibleArrow(true, this.nextNode.bind(this))
    }
  }

  classes() {
    return 'carousel ' + (this.state.reverse ? 'reverse-order ' : '') + (this.props.first ? 'first ' : 'last')
  }

  render() {

    const nodes = this.allNodes()[this.state.index || 0]
    return (
      <div className={this.classes()}>
        <h2>{this.title()}</h2>
        <div className='row justify-content-center'>
          <div className='col-2'>
            {this.leftArrow()}
          </div>
          <div className='node-holder col-8'>
            <CSSTransitionGroup
              transitionName={'node'}
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}>
            {nodes}
            </CSSTransitionGroup>
          </div>
          <div className='col-2'>
            {this.rightArrow()}
          </div>
        </div>
      </div>
    );
  }
}
