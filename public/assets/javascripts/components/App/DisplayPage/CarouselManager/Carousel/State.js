import React from 'react'

import Category from './Node/Category'

export default class State extends React.Component {
  constructor() {
    super()
  }


   render() {

     console.log(Number(this.props.info.unknown))

      return (
         <div className='State'>
           <Category category='unknown' balls={Number(this.props.info.unknown)} />
         </div>
      );
   }
}
