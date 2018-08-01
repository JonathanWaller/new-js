import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ErrorBoundary from "./components/ErrorBoundary";
import RenderOptions from "./components/RenderOptions";
import Modal from "./components/Modal";
import ThemeProvider from "./components/ThemeProvider";

import { ThemeContext } from "./Context";
const { Consumer } = ThemeContext;

class App extends Component {
  // static getDerivedStateFromProps(nextProps, prevState) {}
  state = { open: false };

  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <ThemeProvider>
            <Consumer>
              {({ theme, changeTheme }) => (
                <div
                  style={{
                    background: theme,
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <select onChange={e => changeTheme(e.target.value)}>
                    <option value="#787878">Dark</option>
                    <option value="#F5F5F5">Light</option>
                    <option value="#FFFF00">Sun</option>
                    <option value="#6699FF">Ocean</option>
                  </select>
                </div>
              )}
            </Consumer>
          </ThemeProvider>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <RenderOptions />
          <button onClick={() => this.setState({ open: !this.state.open })}>
            Open Modal
          </button>
        </div>
        <Modal>
          <div
            style={{
              display: this.state.open ? "block" : "none",
              position: "absolute",
              top: 0,
              left: 0,
              background: "salmon",
              height: "100vh",
              width: "100vw",
              zIndex: 10
            }}
          >
            Hello From the Portal
            {/* <button onClick={()=>this.setState({open: !this.state.open})} */}
          </div>
        </Modal>
      </ErrorBoundary>
    );
  }
}

export default App;
