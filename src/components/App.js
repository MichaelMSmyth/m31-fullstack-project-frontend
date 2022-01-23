import React, { PureComponent } from "react";
import Routes from "../routes";

// This is an alternative React component class which can be used to stop child components from rerendering if their props don't change. It's a performance optimisation. Unfortunately this only works with class components, not functional ones.
class App extends PureComponent {
  render() {
    return <Routes />;
  }
}

export default App;
