import React from 'react';
import { Component } from 'react';
// eslint-disable-next-line
import * as api from '../../services/api';
import './styles/Home.css';
// import PropTypes from 'prop-types'; // ES6

import Footer from '../Shared/Footer/Footer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // This is the life cycle method that guarantees
  // that the DOM has been mounted in the browser successfully
  componentDidMount() {
    // console.log('did mount');
    window.scrollTo(0, 0);

    // debugger;
    //after react get mounted
    // when the data is accessible
    
  }

  // This is the life cycle method that
  // says the component is about to be unmounted
  componentWillUnmount() {
    // console.log('will Unmount');
    // debugger;
  }

  render() {
    return (
      <div className="Home text-center">
        <h1>Test</h1>
        <Footer/>
      </div>
    );
  }
}

export default Home;
