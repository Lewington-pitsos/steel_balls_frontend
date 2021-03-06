import React from 'react'

import pageActions from '../../../actions/pageActions'

export default class TitleForm extends React.Component {
  constructor() {
    super()
    this.state ={ ballNumber: '3' }
  }

  startCalculating(event) {
    event.preventDefault()
    pageActions.toDisplayPage(this.state.ballNumber)
  }

  updateBallNumber(event) {
    this.setState({ ballNumber: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.startCalculating.bind(this)}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Please select a number of balls to solve for</label>
          <br />
          <select className="ball-number" onChange={this.updateBallNumber.bind(this)} defaultValue='3'>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <button type="submit" className="button">Submit</button>
        <small className="form-text text-muted">Now... why on earth did I disable 1 and 2?</small>
      </form>
    );
  }
}
