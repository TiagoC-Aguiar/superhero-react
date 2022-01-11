import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;

  .panel {
    padding: 10px;
    border: 1px solid #999;
    margin: 10px;
  }
`;
