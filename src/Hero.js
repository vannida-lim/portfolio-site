import React from 'react'
import styled from 'styled-components'

const Blurb = styled.div`
    font-size: 6em;
    margin: 0.2em;
    padding-top: 2em;
    padding-bottom: 1em;
  
    // border: 1px solid black;
`;

const Hero = () => {
    return (
        <Blurb>
            Hello! I'm a software engineer living in Philadelphia.
        </Blurb>
    )
}

export default Hero;