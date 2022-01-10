import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 4%;
  border: 1px solid black;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */
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
      letter-spacing: .5px;
      font-size: 14px;
      outline: 0;
      height: 36px;
      border-radius: 2px;
      padding: 0 16px;
      margin: 16px 0;
      box-shadow: 2px 2px 2px rgba(0,0,0,.14);
      box-sizing: inherit;
      border: none;
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
    font-size: 16px;
    padding: 0;
    box-sizing: content-box;
    outline: none;
    box-shadow: none;
  }

  input:focus {
    border-bottom: 1px solid #189;
    box-shadow: 0 1px 0 0 #189;
  }
`;
