import React from 'react'

import treeStore from '../../../stores/TreeStore'

export default class CarouselManager extends React.Component {
  constructor() {
    super()
    this.setState( treeStore.getInfo() )
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
           Carousel
          </div>
          <div className='col-12'>
            Carousel
          </div>
        </div>
      </div>
    );
  }
}
