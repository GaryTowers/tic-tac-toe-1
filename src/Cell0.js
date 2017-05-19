import React, { Component } from 'react';

class Cell0 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={'cell cell-0' + this.props.classModifiers} onClick={this.props.setAsMove}>0</div>
    );
  }
}

export default Cell0;