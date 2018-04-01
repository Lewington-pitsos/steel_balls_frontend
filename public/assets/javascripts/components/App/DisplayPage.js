import React from 'react'

import Navigators from './DisplayPage/Navigators'
import Legend from './DisplayPage/Legend'

export default class DisplayPage extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log('mounted display page');
  }

  componentWillUnmount()  {
    console.log('unmounted dispklay opage');
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
