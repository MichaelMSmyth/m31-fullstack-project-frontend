import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Routes from "../routes";
import Store from "../store";
import BackgroundStars from "./BackgroundCanvas";

// <div class="starfield">
// <div class="layer"></div>
// <div class="layer"></div>
// <div class="layer"></div>
// <div class="layer"></div>
// const { store } = Store();

// This is an alternative React component class which can be used to stop child components from rerendering if their props don't change. It's a performance optimisation. Unfortunately this only works with class components, not functional ones.
class App extends PureComponent {
  render() {
    return (
      <div>
        <div classname="background">
          <div className="shape"></div>
          <div className="shape"></div>
          <div class="bg"></div>
          <BackgroundStars />
        </div>
        <Routes />
      </div>
    );
  }
}

export default App;

// In this app.js. Get user state, username, email and password
// all login credentials to be passed to login component
//

// const mapStateToProps = (state) => {
//   return { user: state.user };
// };

// export default connect(mapStateToProps)(App);
