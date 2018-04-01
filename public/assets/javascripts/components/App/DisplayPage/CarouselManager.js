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
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}>
              <Carousel nodes={this.state.node} stateNode={this.state.atState} first={true} key={this.state.key + 1}/>
              <Carousel nodes={this.state.children} stateNode={!this.state.atState} first={false} key={this.state.key + 2}/>
            </CSSTransitionGroup>
          </div>
        </div>
      </div>
    );
  }
}
