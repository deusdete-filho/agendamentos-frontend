import styled from 'styled-components';
import { colorOrange } from '../../styles/colors';

export const Container = styled.div`
  padding-bottom: 5px;
  background: #f1f1f1;
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

export const EmptyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  > div {
    width: 170px;

    height: 170px;
    background: #eeeff1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 95px;
    }
  }

  span {
    color: #b8b9bb;
    max-width: 173px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  a {
    color: ${colorOrange};
  }
`;

export const MyAppointments = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    align-items: center;
    height: 70px;
    margin-bottom: 20px;
    position: relative;

    > div {
                border-radius: 3px;

      flex: 1;
      position: relative;
      background: #fff;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
            color: #464646;

      padding: 10px 15px;
        box-shadow: 1px 0px 2px rgba(0, 1, 1, 0.05);

      .left {
        height: 100%;
        display: flex;

        > span {
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 40px;
          margin-right: 15px;
          border: 2px solid #feffff;
        }

        strong {
          font-size: 15px;
          margin-bottom: 2px;
          display: block;
        }

        p {
          margin-top: 5px;
          font-size: 13px;
          color: #97989a;
        }
      }
    }
  }
`;
