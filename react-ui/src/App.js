import React, { Component } from 'react';
import Header from './Header';

if(process.env === 'development'){
    const URL = require('../config.js')
}

else {
    const URL = process.env.URI;
}


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      pageHeader: "Preference Center",
      url: `${URL}/api/prefs/596ea67a92ee13b276b283be`
    }
  }
  render() {
    return(
      <Header message={this.state.pageHeader}/>
    )
  }
}
