import React, { Component } from 'react';
import Header from './Header';
import PreferenceCenter from './PreferenceCenter';

if(process.env === 'production'){
  const URL = process.env.URI;
}

else {
  const URL = require('../config.js')
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
      <div>
        <Header message={this.state.pageHeader}/>
        <PreferenceCenter url={this.state.url} />
      </div>

    )
  }
}
