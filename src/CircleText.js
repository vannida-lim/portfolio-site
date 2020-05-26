import React, { Component } from 'react';
import styled from 'styled-components';

import SvgContactMeHere from './icons/ContactMeHere.js';

const Circle = styled.div`
    color: #BF7B5B;
    font-size: 1.3em;
    animation-name: rotate-s-loader;
    animation-iteration-count: infinite;
    animation-duration: 30s;
    animation-timing-function: linear;
    @keyframes rotate-s-loader {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(360deg);
        }
      }
`

class CircleText extends Component {
    render() { 
        return(
            <Circle>
                <SvgContactMeHere/>
            </Circle>
        ) 
    }
}

export default CircleText;