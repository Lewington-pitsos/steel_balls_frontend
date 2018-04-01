import React from 'react'

import Category from './CarouselNode/Category'

export default class CarouselNode extends React.Component {

   render() {
      return (
         <div className='node'>
           {this.props.children}
         </div>
      );
   }
}
