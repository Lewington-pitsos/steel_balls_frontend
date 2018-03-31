import React from 'react'

import NavButton from './Navigators/NavButton'
import pageActions from '../../../actions/pageActions'

export default class Navigators extends React.Component {
  constructor() {
    super()
  }

  toTitlePage() {
    pageActions.toTitlePage()
  }


  render() {
    return (
      <div className='row'>
        <div className='col-12'>
          <ul>
            <li>
              <NavButton >
                Back
              </NavButton>
            </li>
            <li>
              <NavButton >
                Return to Start
              </NavButton>
            </li>
            <li>
              <NavButton action={this.toTitlePage.bind(this)}>
                Calculate Again
              </NavButton>
            </li>
           </ul>
         </div>
       </div>
     );
  }
}
