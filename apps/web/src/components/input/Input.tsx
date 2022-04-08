import * as React from 'react';
import styled from 'styled-components';

interface Props {
    height?: string;
    width?: string;
    margin?: string;
}

const Input = styled.input<Props>`
  padding: 0 10px;
  color: #333333;
  background: #FFF;
  border: 2px solid #C3C3C3 ;
  border-radius: 12px;
  width: ${props => props.width ? props.width : '300px'};
  height: ${props => props.height ? props.height : '50px'};
  margin: ${props => props.margin ? props.margin : '0'};
`;

export const StyledInput = ({ placeholder, value, onChange, width, height, type, margin }: any) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const onMouseEnter = () => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }
    return (
        <Input
            type={type ? type : 'text'}
            width={width}
            height={height}
            onChange={onChange}
            value={value}
            ref={inputRef}
            placeholder={placeholder}
            onMouseEnter={onMouseEnter}
            margin={margin}
        />
    );
}


