import React from 'react'

import NavButton from './Navigators/NavButton'
import pageActions from '../../../actions/pageActions'
import treeActions from '../../../actions/treeActions'
import treeStore from '../../../stores/TreeStore'

export default class Navigators extends React.Component {
  constructor() {
    super()
    this.state = treeStore.navigatorInfo()
  }

  componentWillMount() {
    treeStore.on('change', () => {
      this.setState( treeStore.navigatorInfo() )
    })
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
              <NavButton action={this.back.bind(this)} buttonId='back-nav' disabled={this.state.atStart}>
                Back
              </NavButton>
            </li>
            <li>
              <NavButton action={this.resetNavigation.bind(this)} buttonId='start-nav' disabled={this.state.atStart}>
                Return to Start
              </NavButton>
            </li>
           </ul>
         </div>
       </div>
     );
  }
}
