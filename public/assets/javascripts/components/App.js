import React from 'react'

import TitlePage from './App/TitlePage'
import DisplayPage from './App/DisplayPage'
import pageStore from '../stores/PageStore'

export default class App extends React.Component {
  constructor() {
    super()
    this.titlePage = pageStore.getPage()
  }

   render() {

     const page = this.titlePage ? <TitlePage /> : <DisplayPage />

      return (
         <div className="animated bounce">
            {page}
         </div>
      );
   }
}
