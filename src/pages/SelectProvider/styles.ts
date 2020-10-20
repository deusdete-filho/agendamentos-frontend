import styled from 'styled-components';
import { colorOrange } from '../../styles/colors';

export const Container = styled.div`
  padding-bottom: 5px;
  background: #f6f6f6;
  min-height: 100%;
`;

export const Header = styled.div`
  background: #ffff;
  height: 80px;
  padding: 20px 0;
        box-shadow: 1px 1px 8px rgba(0, 1, 1, 0.05);


  > div {
      width: 90%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    p {
      color: #464646;
      margin-bottom: 5px;
    }

    span {
      color: ${colorOrange};
    }
  }
`;

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 90px;

  > h1 {
    font-size: 18px;
    margin-top: 32px;
    margin-bottom: 24px;
          color: #464646;

  }
`;

export const BoxProvider = styled.div`
  padding: 7px 12px;
  border-radius: 3px;
            color: #464646;

  display: flex;
  align-items: center;
        box-shadow: 1px 1px 8px rgba(0, 1, 1, 0.05);
  background: #fff;
  margin-top: 20px;

  > .info {
    margin-left: 15px;
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 16px;
      color: #232129;
      margin-bottom: 10px;
    }

    span {
      display: flex;
      align-items: center;
      margin-bottom: 7px;
      color: #999591;
      font-size: 12px;

      svg {
        margin-right: 7px;
      }
    }
  }
`;
