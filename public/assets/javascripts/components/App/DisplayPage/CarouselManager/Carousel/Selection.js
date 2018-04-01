import React from 'react'

import Bucket from './Selection/Bucket'

export default class Selection extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='selection'>
        <div className='bucket-holder d-flex justify-content-between'>
          <Bucket side={'left'} info={this.props.info} />
          <Bucket side={'right'} info={this.props.info} />
        </div>
      </div>
    );
  }
}
