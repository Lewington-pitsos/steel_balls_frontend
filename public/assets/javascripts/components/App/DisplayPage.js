import React from 'react'

import Navigators from './DisplayPage/Navigators'
import Legend from './DisplayPage/Legend'
import CarouselManager from './DisplayPage/CarouselManager'
import ThrottlingOverlay from './DisplayPage/ThrottlingOverlay'

export default class DisplayPage extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
        <div className='page' id='display-page'>
          <div className='row p-0 main-content'>
            <div className='col-lg-3 col-md-12 d-flex flex-lg-column flex-column-reverse'>
              <Navigators />
              <Legend />
            </div>
            <div className='col-lg-9 col-md-12' id='carousel-holder'>
              <CarouselManager />
            </div>
          </div>
          <ThrottlingOverlay />
        </div>
    );
  }
}
