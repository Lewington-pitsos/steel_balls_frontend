import React from 'react'

import Navigators from './DisplayPage/Navigators'
import Legend from './DisplayPage/Legend'

export default class DisplayPage extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
        <div className='page' id='display-page'>
          <div className='row'>
            <div className='col-3'>
              <Navigators />
              <Legend />
            </div>
            <div className='col-9'>
              DisplayPage
            </div>
          </div>
        </div>
    );
  }
}
