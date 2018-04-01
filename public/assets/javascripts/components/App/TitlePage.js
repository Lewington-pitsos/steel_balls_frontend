import React from 'react'

import TitleForm from './TitlePage/TitleForm'

export default class TitlePage extends React.Component {
  constructor() {
    super()
  }


   render() {
      return (
         <div className='row justify-content-center page' id='title-page'>
            <div className='col-10 display-flex flex-column justify-content-center'>
              <div className='main-title'>
                <h1>Welcome to Steel Ball Problem Solver&reg;</h1>
                <h1>...</h1>
              </div>
              <TitleForm />
            </div>
         </div>
      );
   }
}
