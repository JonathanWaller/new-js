import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hassError: false };
  }

  //   logError(){

  //   }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // this.logError(error);
  }

  render() {
    return this.state.hasError ? (
      <h1>Something Went Wrong</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
