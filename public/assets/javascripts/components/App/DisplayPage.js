import React from 'react'

import Navigators from './DisplayPage/Navigators'

export default class DisplayPage extends React.Component {
  constructor() {
    super()
  }


   render() {
      return (
         <h1>
            DisplayPage
            <Navigators />
         </h1>
      );
   }
}
