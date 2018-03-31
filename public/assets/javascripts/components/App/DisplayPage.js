import React from 'react'

import Navigators from './DisplayPage/Navigators'
import Legend from './DisplayPage/Legend'

export default class DisplayPage extends React.Component {
  constructor() {
    super()
  }


   render() {
      return (
         <div>
            DisplayPage
            <Navigators />
            <Legend />
         </div>
      );
   }
}
