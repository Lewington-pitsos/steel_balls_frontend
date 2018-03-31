import React from 'react'

import NavButton from './Navigators/NavButton'

export default class Navigators extends React.Component {
  constructor() {
    super()
  }

  toTitlePage() {

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
              <NavButton >
                Calculate Again
              </NavButton>
            </li>
           </ul>
         </div>
       </div>
     );
  }
}
