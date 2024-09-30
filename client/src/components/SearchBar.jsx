import React from 'react'
import styled from "@emotion/styled"
import { GrSearchAdvanced } from "react-icons/gr";

const SearchBarContainer = styled.div`
max-width: 550px;
display: flex;
width: 90%;
border: 1px solid ${({ theme }) => theme.text_secondary + 90};
color: ${({ theme }) => theme.text_primary};
border-radius: 8px;
padding: 12px 16px;
cursor: pointer;
gap: 6px;
align-items: center;
`;

const SearchBar = () => {
  return <SearchBarContainer>
    <GrSearchAdvanced />
    <input placeholder='Search With Prompt ◦ ◦ ◦'
     style={{
        border: "none",
        outline: "none",
        width: "100%",
        fontSize: "16px",
        color: 'inherit',
        background: "transparent",
    }}/>
  </SearchBarContainer>
}

export default SearchBar