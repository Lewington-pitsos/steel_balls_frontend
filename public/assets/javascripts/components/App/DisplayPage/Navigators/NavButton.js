import React from 'react'
import PropTypes from 'prop-types';

export default class NavButton extends React.Component {

  classes() {
    return 'button nav-button' + (this.props.disabled ? ' disabled' : '')
  }

  render() {
    return (
       <button onClick={this.props.action} className={this.classes()} id={this.props.buttonId}>
          {this.props.children}
       </button>
    );
  }
}

NavButton.propTypes = {
  buttonId: PropTypes.string.isRequired
}
