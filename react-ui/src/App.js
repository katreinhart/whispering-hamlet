import React, { Component } from 'react';
import Header from './Header';

const URI;

if(import uriPath from '../config.js')
    URI = uriPath;
else
    URI = process.env.URI;

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
