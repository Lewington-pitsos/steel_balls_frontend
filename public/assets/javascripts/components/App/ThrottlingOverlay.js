import React from 'react'

import throttleStore from '../../stores/ThrottleStore'

export default class ThrottlingOverlay extends React.Component {
  constructor() {
    super()

    this.state = throttleStore.getInfo()

    this.getInfo = this.getInfo.bind(this)
  }

  componentWillMount() { // triggered just before a render occurs apparently
    throttleStore.on('change', this.getInfo)
  }

  componentWillUnmount() { // triggered just before a render occurs apparently
    throttleStore.removeListener('change', this.getInfo)
  }

  getInfo() {
    this.setState( throttleStore.getInfo() )
  }


  classes () {
    return 'overlay throttling' + ( !this.state.throttle ? ' hidden' : '')
  }

  render() {
    return (
       <div className={this.classes()}>
       </div>
    );
  }
}
