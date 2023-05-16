import styled from "styled-components";
import { ColorProps } from "../../../types/props/Color";


export const Div = styled.div`
height: auto;
width: 1000px;
padding-bottom: 40px;
background-color: rgb(71, 71, 71);
display: flex;
flex-wrap: wrap;
align-content: space-between;
`

export const VehicleItem = styled.div`
margin-top: 40px;
margin-left: 40px;
height: 200px;
width: 200px;
background-color: rgb(117, 111, 111);
display: flex;
flex-direction: column;
align-items: center;
`

export const Name = styled.h1`
margin: 0;
margin-top: 15px;
font-size: 17px;
text-align: center;
font-family: custom_bold;
`

export const Description = styled.div`
margin-top: 15px;
`

export const Year = styled.p`
margin: 0;
font-size: 17px;
font-family: custom;
`

export const ColorWrapper = styled.div`
display: flex;
`

export const ColorName = styled.p`
margin: 0;
font-size: 17px;
font-family: custom;
`

export const Color = styled.div`
width: 17px;
height: 17px;
margin-top: 2.5px;
margin-left: 5px;
background-color: ${(props: ColorProps) => props.color};
border-radius: 50px;
`

export const Price = styled.h1`
margin: 0;
margin-top: 30px;
font-size: 25px;
text-align: center;
font-family: custom_bold;
`