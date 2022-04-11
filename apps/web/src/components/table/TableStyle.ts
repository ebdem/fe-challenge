import styled from "styled-components";


export const Wrap = styled.div`
  width: 721px;
  border: 1px solid gray;
  border-radius: 12px;
`;

export const STable = styled.table`
  width: 720px;
  border-collapse: collapse;
  text-align: center;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #C3C3C3;
  line-height: 15px;
`;

export const STHead = styled.thead`
  position: sticky;
  z-index: 100;
  line-height: 15px;
`;

export const STHeadTR = styled.tr`
  background: #F3F3F3;
  border: 1px solid #C3C3C3;
  line-height: 15px;
  height: 50px;
`;

export const STH = styled.th`
  padding:7px;
  color: #000;
  text-transform: uppercase;
  font-size: 12px;
  border: 1px solid #C3C3C3;
  line-height: 15px;

  :not(:last-of-type) {
    border-right: 1px solid #C3C3C3;
  }
  :first-of-type {
    width: 1%;
    white-space: nowrap;
  }
`;

export const STBody = styled.tbody`
  overflow-y: scroll;
  border: 1px solid #C3C3C3;
  line-height: 15px;
  `;

export const STBodyTR = styled.tr`
  background: #fff;
  height: 50px;
  border: 1px solid #C3C3C3;
  line-height: 15px;
  
`;

export const STD = styled.td`
  padding: 7px 15px;
  font-size: 12px;
  border: 1px solid #C3C3C3;
  line-height: 15px;
`;
