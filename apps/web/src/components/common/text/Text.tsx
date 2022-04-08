import * as React from 'react';
import styled from 'styled-components';

interface Props {
    color?: string;
    fontSize?: string;
    padding?: string;
    children?: React.ReactNode;
    margin?: string;
    textAlign?: string;
    fontWeight?: any;
    fontFamily?: string;
    textDecoration?: string;
    textTransform?: string;
}
export const Text = styled.p<Props>`
    font-size: ${props => props.fontSize ? props.fontSize : '24px'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 'medium'};
    font-family: ${props => props.fontFamily ? props.fontFamily : 'Montserrat'};
    text-align: ${props => props.textAlign ? props.textAlign : 'center'};
    padding: ${props => props.padding ? props.padding : '10px'};
    color: ${props => props.color ? props.color : '#FA4616'};
    text-decoration: ${props => props.textDecoration ? props.textDecoration : 'none'};
    text-transform: ${props => props.textTransform ? props.textTransform : 'uppercase'};
    margin:${props => props.margin ? props.margin : '10px'};
   
`;