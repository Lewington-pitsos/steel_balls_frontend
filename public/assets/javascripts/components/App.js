import React from 'react'

import TitlePage from './App/TitlePage'
import DisplayPage from './App/DisplayPage'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { titlePage: true}
  }

   render() {

     const page = this.state.titlePage ? <TitlePage /> : <DisplayPage />

      return (
         <h1 className="animated bounce">
            {page}
         </h1>
      );
   }
}
