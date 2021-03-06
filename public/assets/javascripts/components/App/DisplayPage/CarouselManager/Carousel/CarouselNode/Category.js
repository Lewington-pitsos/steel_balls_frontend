import React from 'react'

import Ball from './Ball'

export default class Category extends React.Component {
  constructor() {
    super()
  }

  balls() {
    const balls = []
    for (var i = 0; i < this.props.balls; i++) {
      balls.push(<Ball category={this.props.category} key={i}/>)
    }
    return balls
  }

  render() {
    return (
       <div className='category d-flex flex-row flex-nowrap'>
        {this.balls()}
       </div>
    );
  }
}
