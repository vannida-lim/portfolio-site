import React, { Component } from 'react';
// import styled from 'styled-components';

import Header from './Header';
import Hero from './Hero';
import Work from './Work';
import AboutMe from './AboutMe';
import Footer from './Footer';

// const Wrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-gap: 20px;
// `
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
