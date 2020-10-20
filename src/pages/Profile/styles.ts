import styled from 'styled-components';
import { colorBlack, colorOrange } from '../../styles/colors';

export const Container = styled.main`
  padding: 0 15px;
  max-width: 1200px;
  width: 100%;
  margin: 45px auto 90px auto;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  padding: 10px;
  width: 90%;

  form {
    width: 100%;
    max-width: 370px;
    margin: 0 auto;

    label {
      display: block;
      text-align: left;
      margin-bottom: 10px;
      color: #959595;
    }

    > div:nth-child(5) {
      margin-bottom: 50px;
    }

    button {
      margin: 40px auto 0 auto;
    }
  }

  @media (max-width: 375px) {
    padding: 30px 15px;
  }
`;

export const AvatarInput = styled.label`
  display: flex !important;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px !important;
  cursor: pointer;
  position: relative;

  span {
    position: absolute;
    right: 120px;
    bottom: 5px;
    background: ${colorOrange};
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    display: none;
  }

  @media (max-width: 414px) {
    span {
      right: 70px;
    }
  }
`;
