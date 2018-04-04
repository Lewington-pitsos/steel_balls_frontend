import React from 'react'

export default class ThrottlingOverlay extends React.Component {
  constructor() {
    super()
  }

  classes () {
    return 'overlay throttling hidden'
  }

  render() {
    return (
       <div className={this.classes()}>
       </div>
    );
  }
}
