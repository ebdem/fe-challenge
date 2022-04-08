import * as React from 'react';
import styled from 'styled-components';

interface Props {
    border?: string;
    color?: string;
    background?: string;
    padding?: string;
    children?: React.ReactNode;
    height?: string;
    onClick: () => void;
    radius?: string
    width?: string;
    alignItems?: string;
    justifyContent?: string;
    display?: string;
    flexDirection?: string;
}
export const Button = styled.button<Props>`
    border: ${props => props.border ? props.border : 'none'};
    display: ${props => props.display ? props.display : 'flex'};
    flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
    align-items: ${props => props.alignItems ? props.alignItems : 'center'};
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
    background: ${props => props.background ? props.background : '#FA4616'};
    padding: ${props => props.padding ? props.padding : '10px'};
    color: ${props => props.color ? props.color : '#fff'};
    height: ${props => props.height ? props.height : '40px'};
    border-radius: ${props => props.radius ? props.radius : '12px'};
    width: ${props => props.width ? props.width : '100px'};
    cursor: pointer;
    
`;