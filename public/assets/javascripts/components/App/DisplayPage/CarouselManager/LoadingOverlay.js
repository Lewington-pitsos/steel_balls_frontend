import React from 'react'

export default class LoadingOverlay extends React.Component {
  render() {
    return (
      <div className='loading overlay'>
        <h3 className='default-message'>Just Calculating Tree, could you give us a moment?</h3>
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      </div>
    )
  }
}
