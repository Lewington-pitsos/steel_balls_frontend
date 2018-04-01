import React from 'react'

export default class Ball extends React.Component {
  render() {

    const classes = 'ball ' + this.props.category

    return (
       <div className={classes}>
       </div>
    );
  }
}
