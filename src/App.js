import React, { Component } from 'react';
// import styled from 'styled-components';

import Header from './Header';
import Hero from './Hero';
import Work from './Work';
import AboutMe from './AboutMe';
// import Footer from './Footer';

// const BackToTop = styled.button`
//   margin: 15px;
//   font-size: 1.5em;
//   font-family: 'Cormorant', sans-serif;
//   margin-left: 50%;
//   behavior: smooth;
//   color: #BF7B5B;
//   background-color: #1E4169;
//   cursor: pointer;
//   border: none;
//   border-radius: 50px;
// `


class App extends Component {
  scroll = () => {
    document.documentElement.scrollTop = 0;
  }
  

  render() {
    return (
      <div>
        <Header/>
        <Hero/>
        <Work/>
        <AboutMe/>
        {/* <Footer/> */}
        {/* <BackToTop onClick={() => this.scroll()}>Back to top</BackToTop> */}
      </div>
    );
  }
}

export default App;
