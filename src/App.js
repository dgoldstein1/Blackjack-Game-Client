import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

//import components:
import Lobby from './components/Lobby';
import Game from './components/Game';

class App extends React.Component {
  render(){
    return (
      <main>
        <Route exact path="/" render={() => (
          this.props.userLogedIn.id ? 
          (<Redirect to="/games"/>)
          :
          (<Lobby/>)
          )}/>
          
          <Route exact path="/games" render={() => (
            !this.props.userLogedIn.id ? 
            (<Redirect to="/"/>)
            :
            (<Game/>)
            )}/>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  userLogedIn: state.userLogedIn
})


export default withRouter(connect(mapStateToProps)(App))
