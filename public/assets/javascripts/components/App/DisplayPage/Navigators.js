import React from 'react'

import NavButton from './Navigators/NavButton'

export default class Navigators extends React.Component {
  constructor() {
    super()
  }


   render() {
      return (
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
      );
   }
}
