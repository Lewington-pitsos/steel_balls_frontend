import React from 'react'

import Category from './Node/Category'

export default class State extends React.Component {
  constructor() {
    super()
  }


   render() {
      return (
         <div className='State'>
           <Category category='normal' balls={8} />
         </div>
      );
   }
}
