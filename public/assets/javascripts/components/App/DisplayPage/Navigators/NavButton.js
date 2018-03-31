import React from 'react'

export default class NavButton extends React.Component {
  constructor() {
    super()
  }

   render() {
      return (
         <button>
            {this.props.children}
         </button>
      );
   }
}
