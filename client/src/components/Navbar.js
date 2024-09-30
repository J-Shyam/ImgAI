import React from 'react'
import styled from '@emotion/styled';
import { CgAdd } from "react-icons/cg";
import { IoIosCompass } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom"
import Button from './button';


const Container = styled.div`
flex: 1;
background: ${({ theme }) => theme.navbar};
color: ${({ theme }) => theme.text_primary};
font-weight : bold;
font-size: 22px;
padding : 14px 50px;
display: flex;
justify-content: space-between;
align-items : center;
box-shadow: 0 0 10px rgba(0,0,0,0.15);
@media only screen and (max-width : 600px){
padding: 10px 12px;
}
`;

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.split("/")



    return (
        <Container>Wall-e AI
            {
                path[1] === 'post' ? (
                    <Button
                        onClick={() => navigate("/post")}
                        text="Explore" leftIcon={<IoIosCompass 
                            style={{
                                fontSize: "18px",
                            }}
                        />
                        }
                        type="secondary"
                    />
                ) : (

                    <Button
                        onClick={() => navigate("/post")}
                        text="Create Post" leftIcon={<CgAdd
                            style={{
                                fontSize: "18px",
                            }}
                        />
                        }
                    />
                )}
        </Container>
    )
}

export default Navbar