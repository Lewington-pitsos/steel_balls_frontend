import React from 'react'
import PropTypes from 'prop-types';

export default class NavButton extends React.Component {
  constructor() {
    super()
  }

   render() {
      return (
         <button onClick={this.props.action}>
            {this.props.children}
         </button>
      );
   }
}

NavButton.propTypes = {
  //action: PropTypes.isRequired
}
