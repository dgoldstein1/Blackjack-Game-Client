import React from "react";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";

//import components:
import Lobby from "./components/Lobby";
import Game from "./components/Game";
import Blackjack from "./components/Game/Blackjack";
import admin from "./components/Game/ResultPages/admin";

class App extends React.Component {
  render() {
    return (
      <main>
        <Route
          exact
          path="/"
          render={() =>
            this.props.userLogedIn.id ? <Redirect to="/game" /> : <Lobby />
          }
        />

        <Route
          exact
          path="/game"
          render={() =>
            !this.props.userLogedIn.id ? <Redirect to="/" /> : <Game />
          }
        />

        <Route exact path="/blackjack" component={Blackjack} />
        <Route exact path="/admin" component={admin} />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  userLogedIn: state.userLogedIn
});

export default withRouter(connect(mapStateToProps)(App));
