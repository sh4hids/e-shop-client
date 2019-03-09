import React, { Component } from 'react';
import { MetaData } from '../components';
import HomePage from './home-page';

class HomePageContainer extends Component {
  static async getInitialProps({ store, req }) {
    //return store.getState();
  }

  render() {
    return <HomePage />;
  }
}

export default HomePageContainer;
