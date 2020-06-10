import React from 'react';
import styled from 'styled-components';

import demo1 from './icons/demo1.png'
import demo2 from './icons/demo2.png'
import demo3 from './icons/demo3.png'

const Wrapper = styled.div`

`
const Header = styled.div`
    margin: 0.4em;
    padding: 0.1em;   
    font-size: 1.6em;
    font-weight: bold;
    width: 325px;
    height: 100px;
`;

const Project = styled.div`
    margin: 1em;
    padding: 0.5em;
    position: relative;
    text-align: left;
    left: 200px; 
    width: 80%;
`;

const TextArea = styled.div`
    width: 60%;
    display: inline-block;
    vertical-align: top;
`;

const Title = styled.div`
    padding: 10px;
    font-size: 3em;
    font-weight: bold;
    display: inline-block;
    transition: background-size .3s ease;
    background: linear-gradient(to bottom, transparent 65%, #1E4169 0) left center/0% 100% no-repeat;
    cursor: pointer;
    a {
        text-decoration: none;
        color: #BF7B5B;
    }
    &:hover {
        background-size: 100% 100%;
    }
`;

const TechStack = styled.div`
    width: 100%;
    font-size: 1.75em;
    margin-bottom: 5px; 
`;

const Description = styled.div`
    width: 100%;
    font-size: 1.5em;
`;

const Demo = styled.div`
    margin-left: 10px;
    width: 38%; 
    display: inline-block;
    text-align: center;
`

const Work = () => {
    return (
        <Wrapper>
            <Header><h1>Selected works.</h1></Header>
            <Project>
                <hr style={{border: '1px solid #BF7B5B'}}></hr>
                <TextArea>
                    <Title>
                        <a href='https://github.com/vannida-lim/studyspots-frontend'>StudySpots</a>
                    </Title>
                    <TechStack>JavaScript, Ruby, React.js, Redux, Ruby on Rails, Postgres</TechStack>
                    <Description>
                        A full stack single page application where users can search for Manhattan cafes via Google Maps markers.
                    </Description>
                </TextArea>
                <Demo><img alt='demo' style={{width: '100%'}} src={demo1}/></Demo>
            </Project>
            <Project>
                <hr style={{border: '1px solid #BF7B5B'}}></hr>
                <TextArea>
                    <Title>
                        <a href='https://github.com/vannida-lim/crwn-clothing'>Crwn Clothing</a>
                    </Title>
                    <TechStack>JavaScript, React.js, Redux, Firebase</TechStack>
                    <Description>
                        An e-commerce site where users can login with their Google account.
                    </Description>
                </TextArea>
                <Demo><img alt='demo' style={{width: '100%'}} src={demo2}/></Demo>
            </Project>
            <Project>
                <hr style={{border: '1px solid #BF7B5B'}}></hr>
                <TextArea>
                    <Title>
                        <a href='https://github.com/vannida-lim/weather-app'>Weather</a>
                    </Title>
                    <TechStack>JavaScript, Node.js, Express.js</TechStack>
                    <Description>
                        A single page application where users can check the weather and recieve advice. 
                    </Description>
                </TextArea>
                <Demo><img alt='demo' style={{width: '100%'}} src={demo3}/></Demo>
            </Project>
        </Wrapper>
    )
}

export default Work;
