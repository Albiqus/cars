import styled, { keyframes } from "styled-components";
import { ColorProps } from "../../../types/props/Color";
import deleteIcon from '../../../images/delete.png'
import editIcon from '../../../images/edit.png'
import acceptIcon from '../../../images/accept.png'


export const Div = styled.div`
height: auto;
width: 1000px;
padding-bottom: 40px;
background-color: rgb(71, 71, 71);
display: flex;
flex-wrap: wrap;
align-content: space-between;
`

const EditingPanelAppearance = keyframes`
  0% {
    height: 0px;
  }
  100% {
   height: 30px;
  }
`

const ButtonAppearance = keyframes`
  0%{
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const AcceptButton = styled.button`
opacity: 0;
border: none;
margin-top: 12px;
margin-right: 12px;
height: 16px;
width: 16px;
background-color: rgba(0,0,0,0);
background-image: url(${acceptIcon});
&:hover{
cursor: pointer;
}
`

export const EditButton = styled.button`
opacity: 0;
border: none;
margin-top: 12px;
margin-right: 12px;
height: 16px;
width: 16px;
background-color: rgba(0,0,0,0);
background-image: url(${editIcon});
&:hover{
cursor: pointer;
}
`

export const DeleteButton = styled.button`
opacity: 0;
border: none;
margin-top: 12px;
margin-right: 12px;
height: 16px;
width: 16px;
background-color: rgba(0,0,0,0);
background-image: url(${deleteIcon});
&:hover{
cursor: pointer;
}
`

export const EditingPanel = styled.div`
position: absolute;
display: flex;
justify-content: flex-end;
bottom: 200px;
width: 200px;
height: 0px;
border-radius: 10px 10px 0 0;
background-color: rgb(117, 111, 111);
`

export const VehicleItem = styled.div`
position: relative;
margin-top: 40px;
margin-left: 40px;
height: 200px;
width: 200px;
background-color: rgb(117, 111, 111);
display: flex;
flex-direction: column;
align-items: center;
border-radius: 0px 0px 10px 10px;
&:hover ${EditingPanel} {
    animation: ${EditingPanelAppearance} forwards 0.5s;
}
&:hover ${DeleteButton} {
    animation: ${ButtonAppearance} forwards 0.7s;
}
&:hover ${EditButton} {
    animation: ${ButtonAppearance} forwards 0.7s;
}
&:hover ${AcceptButton} {
    animation: ${ButtonAppearance} forwards 0.7s;
}
&:hover{
    cursor: default;
}
`

export const Name = styled.p`
margin: 0;
margin-top: 15px;
font-size: 17px;
text-align: center;
font-family: custom_bold;
`

export const NameInput = styled.input`
margin-top: 15px;
font-size: 17px;
text-align: center;
font-family: custom_bold;
height: 21px;
width: auto;
border: none;
outline: none;
max-width: 180px;
background-color: rgb(71, 71, 71);
box-sizing: border-box;
`

export const Model = styled.p`
margin: 0;
margin-bottom: 15px;
font-size: 17px;
text-align: center;
font-family: custom_bold;
`


export const ModelInput = styled.input`
box-sizing: border-box;
font-size: 17px;
text-align: center;
margin-bottom: 15px;
font-family: custom_bold;
width: auto;
height: 21px;
border: none;
outline: none;
max-width: 180px;
background-color: rgb(71, 71, 71);
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
margin-top: 20px;
font-size: 25px;
text-align: center;
font-family: custom_bold;
`

export const PriceInput = styled.input`
font-size: 25px;
text-align: center;
font-family: custom_bold;
margin-top: 19px;
width: auto;
border: none;
outline: none;
max-width: 180px;
background-color: rgb(71, 71, 71);
`

