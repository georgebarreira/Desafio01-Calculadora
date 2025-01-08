import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #000000;
  marging-top: 20px;
`;

export const Content = styled.div`
  @media (min-width: 590px) {
    background-color: #fff;
    width: 50%;
    border: 1px solid #000000;
    border-radius: 25px;
  }
  @media (max-width: 590px) {
    background-color: #fff;
    width: 65%;
    font-size: 5px;
    border: 1px solid #000000;
    border-radius: 25px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
