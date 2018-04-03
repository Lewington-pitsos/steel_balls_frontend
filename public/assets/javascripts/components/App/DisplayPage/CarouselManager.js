import React from 'react'

import treeStore from '../../../stores/TreeStore'
import Carousel from './CarouselManager/Carousel'
import { CSSTransitionGroup } from 'react-transition-group'
import LoadingOverlay from './CarouselManager/LoadingOverlay'


export default class CarouselManager extends React.Component {
  constructor() {
    super()

    this.state = treeStore.getInfo()
    this.getInfo = this.getInfo.bind(this)
  }

  carousels() {
    return this.state.loaded ? [
      <Carousel nodes={this.state.nodes} stateNode={this.state.atState} first={true} key={this.state.key + 1} index={this.state.index} atStart={this.state.atStart}/>,
      <Carousel nodes={this.state.children} stateNode={!this.state.atState} first={false} key={this.state.key + 2} lastSelection={this.state.lastSelection}/>
    ] : ''
  }

  componentWillMount() {
    treeStore.on('change', this.getInfo )
  }

  componentWillUnmount() {
    treeStore.removeListener( 'change', this.getInfo )
  }

  getInfo() {
    this.setState( treeStore.getInfo() )
  }

  classes() {
    return this.state.navigationClass
  }

  possibleOverlay() {
    return this.state.loaded ? '' : <LoadingOverlay />
  }

  render() {

    return (
      <div id='carousel-manager' className={this.classes()}>
        <div className='row'>
          <div className='col-12 position-relative'>
            <CSSTransitionGroup
              transitionName={'carousel'}
              transitionEnterTimeout={1500}
              transitionLeaveTimeout={1500}>
              {this.carousels()}
            </CSSTransitionGroup>
            <CSSTransitionGroup
              transitionName={'overlay'}
              transitionEnterTimeout={1100}
              transitionLeaveTimeout={1000}>
              {this.possibleOverlay()}
            </CSSTransitionGroup>
          </div>
        </div>
      </div>
    );
  }
}
