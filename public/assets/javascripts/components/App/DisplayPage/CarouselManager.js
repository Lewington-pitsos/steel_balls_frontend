import React from 'react'

import treeStore from '../../../stores/TreeStore'
import Carousel from './CarouselManager/Carousel'
import { CSSTransitionGroup } from 'react-transition-group'


export default class CarouselManager extends React.Component {
  constructor() {
    super()

    this.state = treeStore.getInfo()
  }

  carousels() {
    return this.state.loaded ? [
      <Carousel nodes={this.state.nodes} stateNode={this.state.atState} first={true} key={this.state.key + 1} index={this.state.index} atStart={this.state.atStart}/>,
      <Carousel nodes={this.state.children} stateNode={!this.state.atState} first={false} key={this.state.key + 2} lastSelection={this.state.lastSelection}/>
    ] : ''
  }

  componentWillMount() {
    treeStore.on('change', () => {
      this.setState( treeStore.getInfo() )
    })
  }

  classes() {
    return this.state.navigationClass
  }

  overlayClasses() {
    return 'loading-overlay' + (this.state.loaded ? ' animated fadeOut' : '')
  }

  render() {

    return (
      <div id='carousel-manager' className={this.classes()}>
        <div className='row'>
          <div className='col-12 position-relative'>
            <CSSTransitionGroup
              transitionName={'carousel'}
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1500}>
              {this.carousels()}
            </CSSTransitionGroup>
            <div className={this.overlayClasses()}>
              <h3>We're Just Calculating Tree, could you give us a moment?</h3>
              <div class="spinner">
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
                <div class="rect5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
