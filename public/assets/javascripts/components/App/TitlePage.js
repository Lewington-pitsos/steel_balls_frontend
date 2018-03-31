import React from 'react'

export default class TitlePage extends React.Component {
  constructor() {
    super()
  }


   render() {
      return (
         <div className='row justify-content-center' id='title-page'>
            <div className='col-10 display-flex flex-column justify-content-center'>
              <div className='title'>
                <h1>Welcome to Steel Ball Problem Solver&reg;</h1>
                <h1>...</h1>
              </div>
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Please select a number of balls to solve for</label>
                  <select class="ball-number">
                    <option value="3" selected>3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <small class="form-text text-muted">Now... why on earth did I disable 1 and 2?</small>
                </div>
              </form>
            </div>
         </div>
      );
   }
}
