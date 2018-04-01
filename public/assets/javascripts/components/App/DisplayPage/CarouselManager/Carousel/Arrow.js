import React from 'react'

export default class Arrow extends React.Component {
  constructor() {
    super()
  }


  render() {

   const direction = this.props.right ? 'arrow arrow-right' : 'arrow arrow-left'

    return (
       <div className='arrow-holder d-flex align-items-center' onClick={this.props.callback}>
         <span className={direction}></span>
       </div>
    );
  }
}
