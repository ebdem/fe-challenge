import styled from 'styled-components';

interface Props {
  color?: string;
  background?: string;
  padding?: string;
  height?: string;
  radius?: string
  width?: string;

}
export const Select = styled.select<Props>`
  width: ${props => props.width ? props.width : '100px'};
  height: ${props => props.height ? props.height : '50px'};
  border-radius: ${props => props.radius ? props.radius : '12px'};
  background: ${props => props.background ? props.background : '#fff'};
  color: ${props => props.color ? props.color : '#333333'};
  padding: ${props => props.padding ? props.padding : '20px'};
  font-size: 14px;
  border: 2px solid #C3C3C3;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    font-size: 14px;
    font-weight: 500;
  }
`;