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

  classes() {
    return 'position-relative' + (this.state.titlePage ? ' at-title' : '')
  }

  render() {

   const titlePage = <TitlePage />

    return (
       <div className={this.classes()} id='app'>
         <CSSTransitionGroup
           transitionName="page"
           transitionEnterTimeout={1000}
           transitionLeaveTimeout={1000}>
          {this.state.titlePage ? titlePage : null}
          <DisplayPage />
        </CSSTransitionGroup>
      </div>
    );
  }
}
