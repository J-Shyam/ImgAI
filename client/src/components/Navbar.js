import React from 'react'
import styled from '@emotion/styled';
import { CgAdd } from "react-icons/cg";
import Button from './button';


const Container = styled.div`
flex: 1;
background: ${({theme}) => theme.navbar};
color: ${({theme}) => theme.text_primary};
`;

const Navbar = () => {
    return (
        <Container>Wall-e AI
            <Button text="Create Post" leftIcon={<CgAdd 
            style={{
                fontSize : "18px",
            }}
            />}/>
        </Container>
    )
}

export default Navbar