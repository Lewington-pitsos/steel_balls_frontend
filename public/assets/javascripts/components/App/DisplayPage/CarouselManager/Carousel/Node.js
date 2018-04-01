import React from 'react'

import Category from './Node/Category'

export default class Node extends React.Component {

   render() {
      return (
         <div className='node'>
           {this.props.children}
         </div>
      );
   }
}
