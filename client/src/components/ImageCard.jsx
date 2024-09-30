import React from 'react'
import styled from '@emotion/styled'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Avatar from "react-avatar";

const Card = styled.div`
position : relative;
display: flex;
border-radius: 20px;
box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 60};
cursor: pointer;
transition : all 0.3s ease;
&:hover {
box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 80};
scale: 1.05;
}
&:nth-child(7n + 1) {
grid-column: auto/ span 2;
grid-row: auto/ span 2;
}
`;

const HoverOverlay = styled.div`
 position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: start;
  gap: 2px;
  justify-content: end;
  flex-direction: column;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  opacity: 0;
  padding: 16px;
  transition: opacity 0.3s ease;
  color: ${({ theme }) => theme.white};

   ${Card}:hover & {
    opacity: 1;
  }
`;

const Prompt = styled.div`
font-weight: 400px;
font-size: 15px;
color: ${({ theme }) => theme.white};
`;

const Author = styled.div`
font-weight: 600px;
font-size: 14px;
display: flex;
gap: 8px;
align-items: center;
color: ${({ theme }) => theme.white};
`;

const ImageCard = () => {
  return (
    <Card>
        <LazyLoadImage width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3aiLtWDzer5wJuqBvIJafNQAQb6rAUD2P42Bnn0FNKqBYPAkMdLA3D6QRlj1twFAHzf8&usqp=CAU"/>
  <HoverOverlay>
    <Prompt>Prompt</Prompt>
    <Author>Shyam</Author>
  </HoverOverlay>
    </Card>
  )
};

export default ImageCard