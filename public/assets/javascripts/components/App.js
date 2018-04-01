import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

import TitlePage from './App/TitlePage'
import DisplayPage from './App/DisplayPage'
import pageStore from '../stores/PageStore'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = pageStore.getPage()
  }

  componentWillMount() { // triggered just before a render occurs apparently
    pageStore.on('pageChange', () => {
      this.setState( pageStore.getPage() )
    })
  }

  render() {

   const titlePage = <TitlePage />
   const displayPage =  <DisplayPage />

   const showPage = this.state.titlePage ? titlePage : displayPage

    return (
       <div className="position-relative" id='app'>
         <CSSTransitionGroup
           transitionName="example"
           transitionAppear={true}
           transitionAppearTimeout={500}
           transitionEnterTimeout={1000}
           transitionLeaveTimeout={500}>
          {this.state.titlePage ? titlePage : null}
          {this.state.titlePage ? null : displayPage}
        </CSSTransitionGroup>
      </div>
    );
  }
}
