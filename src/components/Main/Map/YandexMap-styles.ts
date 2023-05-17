import styled from "styled-components";
import deleteIcon from '../../../images/delete.png'


export const Div = styled.div`
position: absolute;
left: 100px;
top: 145px;
width: 370px;
height: 280px;
z-index: 2;
background-color: white;;
border-radius: 0px 10px 10px 10px;
display: flex;
justify-content: center;
align-items: center;
`

export const CloseButton = styled.button`
position: absolute;
right: 5px;
top: 5px;
border: none;
height: 16px;
width: 16px;
background-color: rgba(0,0,0,0);
background-image: url(${deleteIcon});
&:hover{
cursor: pointer;
}
`