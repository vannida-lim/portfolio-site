import React, { Component } from 'react';

import Header from './Header';
import Hero from './Hero';
import Work from './Work';
import AboutMe from './AboutMe';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Hero/>
        <Work/>
        <AboutMe/>
        <Footer/>
      </div>
    );
  }
}

export default App;
