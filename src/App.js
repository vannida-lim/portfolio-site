import React, { Component } from 'react';
import styled from 'styled-components';
import { device } from './device';

import Header from './Header';
import Hero from './Hero';
import Work from './Work';
import AboutMe from './AboutMe';


const Wrapper = styled.div`
  @media ${device.mobileM} {
    max-width: 375px;
  }
  @media ${device.laptop} { 
    max-width: 800px;
  }
  @media ${device.desktop} {
    max-width: 1400px;
  }
`
class App extends Component {
  scroll = () => {
    document.documentElement.scrollTop = 0;
  }
  
  render() {
    return (
      <Wrapper>
        <Header/>
        <Hero/>
        <Work/>
        <AboutMe/>
        {/* <BackToTop onClick={() => this.scroll()}>Back to top</BackToTop> */}
      </Wrapper>
    );
  }
}

export default App;
