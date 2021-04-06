import React from "react";

class Pin extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>
          <img src={this.props.image}/>
          <p>{this.props.children}</p>
        </button>
      </div>
    );
  }
}
