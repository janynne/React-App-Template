import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {

  render() {
    return (
      <div>
        <p>About</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  ...state
});

export default connect(mapStateToProps)(About);