import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

import TitlePage from './App/TitlePage'
import DisplayPage from './App/DisplayPage'
import pageStore from '../stores/PageStore'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = pageStore.getPage()

    this.getInfo = this.getInfo.bind(this)
  }

  componentWillMount() { // triggered just before a render occurs apparently
    pageStore.on('pageChange', this.getInfo)
  }

  componentWillUnmount() { // triggered just before a render occurs apparently
    pageStore.removeListener('pageChange', this.getInfo)
  }

  getInfo() {
    this.setState( pageStore.getPage() )
  }

  classes() {
    return 'position-relative container-fluid' + (this.state.titlePage ? ' at-title' : '')
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
