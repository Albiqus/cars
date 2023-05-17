import styled from "styled-components";


export const Div = styled.div`
width: 230px;
`

export const Select = styled.select`
width: 200px;
height: 40px;
appearance: none;
-moz-appearance: none;
-webkit-appearance: none;
border: 2px solid rgb(179, 175, 175);
color: black;
outline: none;
font-family: custom;
background-color: rgb(210, 210, 210);
border-radius: 6px;
margin-left: 40px;
margin-top: 40px;
font-size: 18px;
text-align: center;
&:hover{
    cursor: pointer;
}
`

export const Option = styled.option`
`

export const SelectWrapper = styled.div`
position: relative;
&::before{
    content: '';
    position: absolute;
    bottom: 14px;
    right: -5px;
    transform: translate(-50%);
    display: block;
    width: 20px;
    height: 20px;
    pointer-events: none;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 5px 0 5px;
    border-color: #766f6f transparent transparent transparent;
}
`

