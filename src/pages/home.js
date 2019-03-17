import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

  render() {
    return (
      <div className='main-component'>
        <p>Home</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  ...state
});

export default connect(mapStateToProps)(Home);