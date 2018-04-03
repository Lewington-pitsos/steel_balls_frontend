import React from 'react'

import NavButton from './Navigators/NavButton'
import pageActions from '../../../actions/pageActions'
import treeActions from '../../../actions/treeActions'

export default class Navigators extends React.Component {
  constructor() {
    super()
  }

  toTitlePage() {
    pageActions.toTitlePage()
  }

  back() {
    treeActions.back()
  }

  resetNavigation() {
    treeActions.resetNavigation()
  }


  render() {
    return (
      <div className='row' id='navigators'>
        <div className='col-12 text-center'>
          <ul>
            <li>
              <NavButton action={this.toTitlePage.bind(this)} buttonId='titlepage-nav'>
                Calculate Again
              </NavButton>
            </li>
            <li>
              <NavButton action={this.back.bind(this)} buttonId='back-nav'>
                Back
              </NavButton>
            </li>
            <li>
              <NavButton action={this.resetNavigation.bind(this)} buttonId='start-nav'>
                Return to Start
              </NavButton>
            </li>
           </ul>
         </div>
       </div>
     );
  }
}
