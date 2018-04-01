import React from 'react'

import Category from './CarouselNode/Category'
import treeActions from '../../../../../actions/treeActions'

export default class CarouselNode extends React.Component {

  possibleCallback() {
    return this.props.selectable ? this.navigateHere.bind(this) : null
  }

  navigateHere() {
    treeActions.goTo(this.props.index)
  }

  render() {

    const classes = 'node ' + (this.props.selectable ? 'selectable' : null)

    return (
       <div className={classes} onClick={this.possibleCallback()}>
         {this.props.children}
       </div>
    );
  }
}
