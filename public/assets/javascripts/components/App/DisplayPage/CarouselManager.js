import React from 'react'

import treeStore from '../../../stores/TreeStore'
import Carousel from './CarouselManager/Carousel'

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
            <Carousel nodes={this.state.node} stateNode={true}/>
          </div>
          <div className='col-12'>
            <Carousel nodes={this.state.node} stateNode={false}/>
          </div>
        </div>
      </div>
    );
  }
}
