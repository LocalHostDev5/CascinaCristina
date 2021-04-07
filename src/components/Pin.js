import React from 'react';
import PropTypes from 'prop-types';

export default class Pin extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        <img alt={this.props.alt} src={this.props.src}/>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

Pin.propTypes = {
  alt: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired
}
