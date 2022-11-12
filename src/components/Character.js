// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios"
import styled from 'styled-components';

const StyledUl = styled.ul 
    `
    list-style-type: none;
    padding: 0;
    margin: 0;
    `
const StyledLi = styled.li 
    `
    &:hover {
        color: blue;
    }
    `
const StyledDiv = styled.div
    `
    align-content: space-between;
    align-items: center;
    justify-content: center;
    display: flex;
    border-top: 1px solid;
    `
const StyledButton = styled.button 
    `
    margin: 50px;
    border: none;
    outline: none;
    background: none;
    `
export default function Character({ info,elem }){
    const [ isVisible, setIsVisible] = useState(false);
    
    function toggle() {
        setIsVisible(wasVisible => ! wasVisible);
    }


    return (
    <div>
        <StyledDiv className='something'> 
            <h3>{ info.name }</h3>
            <StyledButton onClick={toggle}>
                { isVisible? '^' : 'v'} 
            </StyledButton>
        </StyledDiv>
        {
            isVisible && (
                <StyledUl>
                    <StyledLi>Gender: { info.gender }</StyledLi>
                    <StyledLi>Height: { info.height }</StyledLi>
                    <StyledLi>Mass: { info.mass }</StyledLi>
                    <StyledLi>Birth Year: { info.birth_year }</StyledLi>
                    <StyledLi>Eye Color: { info.eye_color }</StyledLi>
                    <StyledLi>Hair Color: { info.hair_color }</StyledLi>
                    <StyledLi>Skin Color: { info.skin_color }</StyledLi>
                </StyledUl>
            )
        }
    </div>
    )
}