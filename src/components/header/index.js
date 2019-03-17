import React, { Component } from 'react';
import { Navbar } from '../navbar';

class Header extends Component {

  render() {

    return (
        <header className="App-header">
            <Navbar />
        </header>
    );

  }

}

export { Header };