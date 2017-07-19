import React, { Component } from 'react';
import Header from './Header';
import PreferenceCenter from './PreferenceCenter';

let URL = '';

if(process.ENV === 'production'){
  URL = process.ENV.URI;
}

else {
  URL = 'http://localhost:5000'
}


export default class App extends Component {
  constructor() {
    super();
    console.log(URL);
    const url = URL + '/api/prefs/596ea67a92ee13b276b283be';
    this.state = {
      pageHeader: "Preference Center",
      url: url
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
