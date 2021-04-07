import React from 'react';

export default class Pin extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        <img src={this.props.src} alt={this.props.alt}/>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
