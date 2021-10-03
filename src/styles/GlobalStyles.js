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

   /* Position and sizing of burger button */
   .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 14px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #fff;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: ${colors.primaryDarkColor};
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
  Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  .bm-item-list div {
    padding: 0.3em;
    display: flex !important;
    align-items: center;
  }

  .bm-item-list a {
    margin-left: 5px;
    color: #b8b7ad;
  }

  .bm-item-list a:hover {
    color: ${colors.primaryColor};
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
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
