import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './App.scss';
import * as userService from './services/user';
import { Header } from './components/header';
import { Footer } from './components/footer';
import Routes from './routes';

class App extends Component {

  state = { 
    showSomething: false,
    username:''
   };


  onClick = () => {
    userService.changeUserName('Janynne');
    userService.authenticate({username: 'marcelo'});
    userService.setState({roles: ['admin']});
    this.setState({ username:'marcelo'});

  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Routes/>
        <Footer/>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  ...state
});

export default  withRouter(connect(mapStateToProps)(App));