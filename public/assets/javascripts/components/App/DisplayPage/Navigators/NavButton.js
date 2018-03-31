import React from 'react'
import PropTypes from 'prop-types';

export default class NavButton extends React.Component {
  constructor() {
    super()
  }

   render() {
      return (
         <button onClick={this.props.action} className='nav-button' id={this.props.buttonId}>
            {this.props.children}
         </button>
      );
   }
}

NavButton.propTypes = {
  buttonId: PropTypes.string.isRequired
}
