import React from 'react'

import TitleForm from './TitlePage/TitleForm'

export default class TitlePage extends React.Component {
  constructor() {
    super()
  }


   render() {
      return (
         <div className='row justify-content-center page' id='title-page'>
            <div className='col-12 display-flex flex-column justify-content-center p-0'>
              <div class='half' id='top-half'>
                <div className='main-title'>
                  <h1>Welcome to Steel Ball Problem Solver&reg;</h1>
                  <h1>...</h1>
                </div>
              </div>
              <div class='half' id='bottom-half'>
                <TitleForm />
              </div>
            </div>
         </div>
      );
   }
}
