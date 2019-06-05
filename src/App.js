import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";

//import components:
import Lobby from "./components/Lobby";
import Game from "./components/Game";
import Blackjack from "./components/Game/Blackjack";

function App() {
  return (
    <div className="App">
      <Route exact path="/game" component={Game} />
      <Route exact path="/" component={Lobby} />
      <Route exact path="/blackjack" component={Blackjack} />
    </div>
  );
}

export default withRouter(connect(null)(App));
