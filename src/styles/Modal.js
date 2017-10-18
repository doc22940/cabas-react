import styled, { css } from 'styled-components'
import { HorizontalFlex, VerticalFlex } from './Flex'

export const Modal = VerticalFlex.extend`
position: absolute;
bottom: -185px;
background: white;
border: 1px solid light;
border-radius: 3px;
padding: 15px;
box-sizing: border-box;
width: ${ props => (props.width) };
z-index: 100;
display: ${ props => props.display};
`

export const ModalLabel = styled.span`
font-size: 1.6em;
font-weight: 600;
margin-bottom: 15px;
`