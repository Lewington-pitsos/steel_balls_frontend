import React from 'react'

export default class TitleForm extends React.Component {
  constructor() {
    super()
    this.state ={ ballNumber: '3' }
  }

  startCalculating(event) {
    event.preventDefault()
    console.log('llr')
  }

  updateBallNumber(event) {
    console.log('lol')
    this.setState({ ballNumber: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.startCalculating.bind(this)}>
        <div class="form-group">
          <label for="exampleInputEmail1">Please select a number of balls to solve for</label>
          <br />
          <select class="ball-number" onChange={this.updateBallNumber.bind(this)}>
            <option value="3" selected>3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <small class="form-text text-muted">Now... why on earth did I disable 1 and 2?</small>
      </form>
    );
  }
}
