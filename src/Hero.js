import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-size: 6em;
    margin: 0.2em;
    padding-top: 2em;
    padding-bottom: 1em;
`;

const Hero = () => {
    return (
        <Wrapper>
            Hello! I'm a software engineer living in Philadelphia.
        </Wrapper>
    )
}

export default Hero;