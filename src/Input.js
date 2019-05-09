import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <div>
        <input type="text" ref={this.props.myRef}></input>
        <button onClick={this.props.toggle}>Toggle Case</button>
      </div>
    )
  }
}
