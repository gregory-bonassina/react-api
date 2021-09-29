import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 64px;
  width: 100%;
  max-width: 480px;
  border-radius: 5px;
  background-color: rgb(32 32 36);
  justify-content: center;

  input {
    height: 50px;
    font-size: 16px;
    border: 2px solid ${colors.primaryDarkColor};
    border-radius: 5px;
    margin-top: 15px;
    background-color: ${colors.primaryDarkColor};
    padding: 0px 1em 0px 2.65em;
    color: #fff;

    &:focus {
      border-color: ${colors.primaryColor};
    }
  }
`;
