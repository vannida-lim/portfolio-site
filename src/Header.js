import React from 'react';
import styled from 'styled-components';

import CircleText from './CircleText';

const Wrapper = styled.div`
   display: flex; 
   justify-content: space-between;
`;
const NameHeader = styled.div`
    font-size: 4em;
    margin: 0.2em;
    padding: 0.1em;
`;

const CircleDiv = styled.div`
    float: right;
    margin-top: -60px;
`

const Header = () => {
    return (
        <Wrapper>
            <NameHeader>Vannida Lim</NameHeader>
            <CircleDiv>
                <CircleText/>
            </CircleDiv>
        </Wrapper>
    )
}

export default Header;
