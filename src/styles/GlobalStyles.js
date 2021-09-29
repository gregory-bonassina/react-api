import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: ${colors.primaryDarkColor};
    color: ${colors.primaryDarkColor};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    transition: all 300ms;
    margin-top: 20px;
    height: 50px;
    font-size: 16px;
    font-weight: bold;
  }

  button:hover {
    filter: brightness(85%);
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
    font-size: 14px;
    font-weight: bold;
  }

  ul {
    list-style: none;
  }

  /* body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.successColor};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.errorColor};
  } */
`;

export const Container = styled.section`
  width: 100%;
  height: 100%;
`;

export const CenteredDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 450px;
  min-width: 950px;

  @media (max-width: 950px) {
    flex-direction: column;
    min-width: 0;
  }
`;
