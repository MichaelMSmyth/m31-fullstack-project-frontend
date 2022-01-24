import React, { PureComponent } from "react";
import Routes from "../routes";

// This is an alternative React component class which can be used to stop child components from rerendering if their props don't change. It's a performance optimisation. Unfortunately this only works with class components, not functional ones.
class App extends PureComponent {
  render() {
    return (
    <div>
    <div classname="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <div class="bg"></div>
      <div class="starfield">
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      </div>
    </div>
      <Routes />
    </div>);
  }
}

export default App;
