import React, { Component } from 'react';
import Header from './Header';

import uriPath from '../config.js';

const URI = process.env.URI || uriPath;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      pageHeader: "Preference Center"//,
      // url: `${URI}/api/prefs/596ea67a92ee13b276b283be`
    }
  }
  render() {
    return(
      <Header message={this.state.pageHeader}/>
    )
  }
}
