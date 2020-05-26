import React from 'react'
import styled from 'styled-components'

const Blurb = styled.div`
    font-size: 6em;
    margin: 0.2em;
    padding: 0.1em;
    position: absolute;
    top: 4em;
    text-align: left;
    border: 1px solid black;
`;

const AboutMe = () => {
    return (
        <Blurb>
            Hello! I'm a software engineer living in Philadelphia.
        </Blurb>
    )
}

export default AboutMe;