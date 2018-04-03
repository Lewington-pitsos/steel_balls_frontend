import React from 'react'

import Navigators from './DisplayPage/Navigators'
import Legend from './DisplayPage/Legend'
import CarouselManager from './DisplayPage/CarouselManager'

export default class DisplayPage extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
        <div className='page' id='display-page'>
          <div className='row p-0 main-content'>
            <div className='col-3'>
              <Navigators />
              <Legend />
            </div>
            <div className='col-8'>
              <CarouselManager />
            </div>
          </div>
        </div>
    );
  }
}
