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
    border-radius: 2px;
    margin: 10px;
    box-shadow: 2px 2px 3px rgba(0,0,0,.28);
    width: 40%;

    h2 {
      text-align: center;
      text-transform: uppercase;
    }
  }
`;
