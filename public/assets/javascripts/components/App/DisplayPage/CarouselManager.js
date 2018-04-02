import React from 'react'

import treeStore from '../../../stores/TreeStore'
import Carousel from './CarouselManager/Carousel'
import { CSSTransitionGroup } from 'react-transition-group'


export default class CarouselManager extends React.Component {
  constructor() {
    super()

    this.state = treeStore.getInfo()
  }

  componentWillMount() {
    treeStore.on('change', () => {
      this.setState( treeStore.getInfo() )
    })
  }

  render() {
    return (
      <div id='carousel-manager'>
        <div className='row'>
          <div className='col-12'>
            <CSSTransitionGroup
              transitionName={'carousel'}
              transitionEnterTimeout={1}
              transitionLeaveTimeout={1}>
              <Carousel nodes={this.state.nodes} stateNode={this.state.atState} first={true} key={this.state.key + 1} index={this.state.index}/>
              <Carousel nodes={this.state.children} stateNode={!this.state.atState} first={false} key={this.state.key + 2} lastSelection={this.state.lastSelection}/>
            </CSSTransitionGroup>
          </div>
        </div>
      </div>
    );
  }
}
