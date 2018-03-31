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
      <div className='row' id='navigators'>
        <div className='col-12'>
          <ul>
            <li>
              <NavButton buttonId='back-nav'>
                Back
              </NavButton>
            </li>
            <li>
              <NavButton buttonId='start-nav'>
                Return to Start
              </NavButton>
            </li>
            <li>
              <NavButton action={this.toTitlePage.bind(this)} buttonId='titlepage-nav'>
                Calculate Again
              </NavButton>
            </li>
           </ul>
         </div>
       </div>
     );
  }
}
