import React, { Component } from 'react';
import Header from './Header';

if(process.env === 'development'){
    const URI = require('../config.js')
}

else {
    const URI = process.env.URI;
}


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
