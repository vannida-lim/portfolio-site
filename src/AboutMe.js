import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`
const Blurb = styled.div`
    font-size: 1.6em;
    margin: 0.2em;
    padding: 0.1em;
    position: absolute;
    text-align: left;
    bottom: -100px;
    border: 1px solid black;
`;

const Socials = styled.div`
`

class AboutMe extends Component {
    state = {
        value: '',
        copied: false,
        bgColor: '',
        fontColor: ''
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
                <Blurb>
                    <p>Nice to meet you! I'm a full stack developer specializing in JavaScript, Ruby, Rails, Node.js, React.js, SQL and NoSQL. I enjoy creating applications that follow RESTful convention, MVC, and Flux patterns. I love creating a impactful and accessible user experiences.</p>
                
                    <p>My love for travel led me to Seoul, South Korea, where I was an English teacher for 3 years. I have travelled to about 25 countries and love solo-backpacking. When I'm not coding, you can find me powerlifting, snowboarding, or meditating.</p>
                </Blurb>
                <Socials>
                    <h1>How to reach me?</h1>
                    <div>Check out my repos on <a href='https://github.com/vannida-lim'>Github</a>.</div>
                    <div>Read some of my <a href='https://medium.com/@vannida.lim'>Medium</a>articles.</div>
                    <div>Feel free to connect on <a href='https://www.linkedin.com/in/vannida-lim/'>Linkedin</a> with me.</div>
                    <div>My email is: <div id='email' 
                    onClick={() => this.onCopy()} 
                    style={this.state.copied?{backgroundColor: this.state.bgColor, color: this.state.fontColor} : {backgroundColor: !this.state.bgColor, color: !this.state.fontColor } } value='vannida.lim@gmail.com'>vannida.lim@gmail.com</div>
                    { this.state.copied? <div>copied</div> : <div>click to copy</div> }
                    </div>
                    
                

                </Socials>

            </Wrapper>
        )
    }
}

export default AboutMe;