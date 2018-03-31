import React from 'react'

import TitlePage from './App/TitlePage'
import DisplayPage from './App/DisplayPage'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { titlePage: false}
  }

   render() {

     const page = this.state.titlePage ? <TitlePage /> : <DisplayPage />

      return (
         <div className="animated bounce">
            {page}
         </div>
      );
   }
}
