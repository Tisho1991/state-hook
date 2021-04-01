import React, { Component } from 'react';

class ExampleFunction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div className="col-4">
        <footer style={{ padding: "100px 0px", display: "flex", flexDirection: "column" }}>
          <h1>Simple counter</h1>
          <p>You clicked {this.state.count} times</p>
          <button className="btn btn-block btn-primary w-25 align-self-center mt-5" onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
          </button>
          <button className="btn btn-block btn-danger w-25 align-self-center mt-4" onClick={() => this.setState({ count: this.state.count + 500 })}>
            Click me x500
          </button>
        </footer>
      </div>
    );
  }
}

export default ExampleFunction;