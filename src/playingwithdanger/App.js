import React, { Component } from "react";

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      // src\images\cat.png
      <img
        src="cat.gif"
        style={{ position: "absolute", left: mouse.x, top: mouse.y }}
        alt="cat"
      />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    // props.render
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
        {/* which evals to <Cat mouse={this.state} /> */}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={(mouse) => <Cat mouse={mouse} />} />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return <MouseTracker />;
  }
}

export default App;
