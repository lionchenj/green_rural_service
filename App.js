import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "src/store/index";
import Router from "router/index";
import { Root } from "native-base";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <Provider store={store}>
        <Root>
          <Router />
        </Root>
      </Provider>
    );
  }
}
export default App;
