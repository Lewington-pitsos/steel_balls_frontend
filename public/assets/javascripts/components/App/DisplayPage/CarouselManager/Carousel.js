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
    this.messageMappings = {
      selection: {
        current: 'Previous Weigh',
        upcoming: 'Possible Selections'
      },
      state: {
        current: 'Current Ball State',
        upcoming: 'Possible Outcomes'
      }
    }
  }

  nextNode() {
    carouselActions.nextNode()
  }

  prevNode() {
    carouselActions.previousNode()
  }

  newCarousel() {
    carouselActions.newCarousel()
  }

  updateState() {
    if (!this.props.first) {
      this.setState( carouselStore.getState() )
    }
  }

  componentWillMount() {
    carouselStore.addListener('changeState', this.updateState )
  }

  componentWillUnmount() {
    carouselStore.removeListener( 'changeState', this.updateState )
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
    return (!this.props.first && this.props.nodes.length > 1) ? <Arrow right={right} callback={callback}/> : null
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

  message() {
    if (this.props.stateNode) {
      return this.title(this.messageMappings.state)
    } else {
      return this.title(this.messageMappings.selection)
    }
  }

  title(mapping) {
    if (this.props.first) {
      return mapping.current
    } else {
      return mapping.upcoming
    }
  }

  whisper() {
    if (this.props.lastSelection) {
      return 'These are all winning states (we know where the oddball is and how much it weighs)'
    } else if (this.props.atStart) {
      return 'This is the innitial group of balls. Any of them could be the oddball.'
    } else {
      return '...'
    }
  }

  render() {

    const nodes = this.allNodes()[this.props.first ? this.props.index : this.state.index]
    return (
      <div className={this.classes()}>
        <h2>{this.message()}</h2>
        <p className='whisper'>{this.whisper()}</p>
        <div className='row justify-content-center'>
          <div className='col-md-2 col-sm-1'>
            {this.leftArrow()}
          </div>
          <div className='node-holder col-md-8 col-sm-10'>
            <CSSTransitionGroup
              transitionName={'node'}
              transitionEnterTimeout={600}
              transitionLeaveTimeout={600}>
            {nodes}
            </CSSTransitionGroup>
          </div>
          <div className='col-md-2 col-sm-1'>
            {this.rightArrow()}
          </div>
        </div>
      </div>
    );
  }
}
