import React from 'react'

import treeStore from '../../../stores/TreeStore'

export default class CarouselManager extends React.Component {
  constructor() {
    super()
  }

  componentWillMount() {
    treeStore.on('change', () => {
      this.setState( treeStore.getInfo() )
    })
  }



  render() {
    return (
       <div className='row' id='legend'>
         <div className='col-12'>
           <h3>Legend</h3>
          </div>
       </div>
    );
  }
}
