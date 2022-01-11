import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 66%;

  h1 {
    font-size: 4rem;
  }

  form {
    width: 86%;
  }

  button {
    cursor: pointer;
    color: #fff;
    background-color: #189;
    letter-spacing: 0.5px;
    font-size: 14px;
    outline: 0;
    height: 36px;
    border-radius: 2px;
    padding: 0 16px;
    margin: 16px 0;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.28);
    box-sizing: inherit;
    border: none;
  }

  .heroList {
    margin: auto;
    width: 100%;
  }
`;

export const InputField = styled.div`
  width: 100%;

  input {
    border: none;
    border-bottom: 1px solid #8d8d8d;
    width: 100%;
    height: 3rem;
    margin: 0 0 8px 0;
    font-size: 18px;
    padding: 0;
    box-sizing: content-box;
    outline: none;
    box-shadow: none;
  }

  input:focus {
    border-bottom: 2px solid #189;
    box-shadow: 0 1px 0 0 #189;
  }
`;
