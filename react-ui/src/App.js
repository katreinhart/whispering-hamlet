import React, { Component } from 'react';
import Header from './Header';
import PreferenceCenter from './PreferenceCenter';

let URL = 'https://whispering-hamlet-19229.herokuapp.com/';

class App extends Component {
  constructor() {
    super();
    const url = URL + 'api/prefs/593f40e40c4afe500bcb43cb';
    this.state = {
      pageHeader: "Preference Center",
      url: url
    }
  }

  render() {
    return(
      <div className="App">
        <Header message={this.state.pageHeader}/>
        <PreferenceCenter url={this.state.url} />
      </div>
    )
  }
}

export default App;
