import React, { Component } from 'react';
import Header from './Header';
import PreferenceCenter from './PreferenceCenter';

let URL = 'https://whispering-hamlet-19229.herokuapp.com/';

// if(process.env.NODE_ENV === 'production'){
//   URL = process.env.URI;
// }
//
// else {
//   URL = 'http://localhost:5000'
// }


export default class App extends Component {
  constructor() {
    super();
    console.log(URL);
    const url = URL + 'api/prefs/593f40e40c4afe500bcb43cb';
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
