import React, { Component } from 'react';
import styled from 'styled-components';
import myProfile from './icons/myProfile.png';

const Wrapper = styled.div`
`
const Header = styled.div`
    margin: 0.4em;
    padding: 0.1em;   
    font-size: 1.6em;
    font-weight: bold;
    width: 275px;
    height: 100px;

   
    border: 1px solid black;
`

const Blurb = styled.div`
    font-size: 1.6em;
    margin: 1em;
    padding: 0.5em;
    position: relative;
    text-align: left;
    left: 200px; 
    width: 500px;
    border: 1px solid black;
`;


const ProfilePic = styled.img`
    margin: 1em;
    padding: 0.5em;    
    position: relative;
    top: 50px;
    left: 100px;
    // border: 1px solid black;
`;

const BlurbAndPic = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
`;

const Socials = styled.div`
    font-size: 1.6em;
    margin: 1em;
    padding: 0.5em;
    position: relative;
    text-align: left;
    left: 200px; 
    width: 550px;
    border: 1px solid black;
`;

class AboutMe extends Component {
    state = {
        value: '',
        copied: false,
        bgColor: '',
        fontColor: '',
        display: 'inline'
    }

    hrefStyle = {
        backgroundColor: '#BF7B5B',
        color: '#253549',
        textDecoration: 'none',
        fontWeight: 'bold'
    }

    socialsDivStyle = {
        margin: '10px',
    }

    hrStyle = {
        border: '1px solid #BF7B5B'
    }

    onCopy = () => {
        const copyText = document.getElementById('email')
        const textArea = document.createElement("textarea")
        textArea.value = copyText.textContent
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        this.setState({
            value: '',
            copied: !this.state.copied,
            bgColor: '#BF7B5B',
            fontColor: '#253549'
        })
        textArea.remove()
    }
    

    render() {
        return (
            <Wrapper>
                <Header><h1>Some Details</h1></Header>
                <BlurbAndPic>
                    <Blurb>
                        <hr style={this.hrStyle}></hr>
                        <h1>In a nutshell</h1>
                        <div>Nice to meet you! I'm a full stack developer specializing in JavaScript, Ruby, Rails, Node.js, React.js, SQL and NoSQL. I enjoy creating applications that follow RESTful convention, MVC, and Flux patterns. I love creating a impactful and accessible user experiences.</div>
                        <br/>
                        <div>My love for travel led me to Seoul, South Korea, where I was an English teacher for 3 years. I have travelled to about 25 countries and love solo-backpacking. When I'm not coding, you can find me powerlifting, snowboarding, or meditating.</div>
                    </Blurb>
                    <ProfilePic src={myProfile} alt='profile pic'/>
                </BlurbAndPic>
                <Socials>
                    <hr style={this.hrStyle}></hr>
                    <h1>Reach me here</h1>
                    <div style={this.socialsDivStyle}>
                        Check out my repos on <a href='https://github.com/vannida-lim' style={this.hrefStyle}>Github</a>.
                    </div>
                    <div style={this.socialsDivStyle}>
                        Read some of my <a href='https://medium.com/@vannida.lim' style={this.hrefStyle}>Medium</a> articles.
                    </div>
                    <div style={this.socialsDivStyle}>
                        Feel free to connect on <a href='https://www.linkedin.com/in/vannida-lim/' style={this.hrefStyle}>Linkedin</a> with me.
                    </div>
                    <div style={this.socialsDivStyle}>
                        My email is: 
                        <div id='email' 
                            onClick={() => this.onCopy()} 
                            style={this.state.copied?{backgroundColor: this.state.bgColor, color: this.state.fontColor, display: this.state.display} : {backgroundColor: !this.state.bgColor, color: !this.state.fontColor, display: this.state.display }} value='vannida.lim@gmail.com'> vannida.lim@gmail.com
                        </div>
                        <div style={{display: 'inline'}}>{ this.state.copied? ' ☞copied!': ' ✍︎ click to copy'}</div>
                    </div>
                </Socials>

            </Wrapper>
        )
    }
}

export default AboutMe;