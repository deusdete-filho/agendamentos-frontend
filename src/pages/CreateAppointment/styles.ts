import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import { colorOrange } from '../../styles/colors';

interface IProvider {
  selected?: boolean;
}

interface IHour {
  selected?: boolean;
}

interface IDone {
  active?: boolean;
}

export const Container = styled.div`
  background: #f6f6f6;
  padding-bottom: 35px;
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
export const ListProvider = styled(Carousel)`
  margin-top: 30px;
  width: 400px;

  /* Slider */
  .rec-item-wrapper {
    /* width: 120px !important; */
  }
  .rec-arrow {
    display: none;
  }
  .rec-pagination {
    display: none;
  }
`;

export const Provider = styled.li<IProvider>`
  background: ${({ selected }) => (selected ? '#1DBFFA' : '#fff')};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 12px;
  width: 100%;
              box-shadow: 1px 1px 8px rgba(0, 1, 1, 0.05);

  cursor: pointer;
  overflow: hidden;

  & + li {
    margin-left: 15px;
  }

  span {
    width: 20px;
    white-space: nowrap;
    display: inline-block;
    font-weight: 500;
    margin-left: 10px;
    color: ${({ selected }) => (selected ? '#ffff' : '#464646')};
  }
`;

export const SelectDate = styled.div`
  margin-top: 40px;

  h3 {
    font-size: 18px;
    color: #464646;
    margin-bottom: 24px;
  }

  /* Daypicker */
  .DayPicker {
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
            box-shadow: 1px 1px 8px rgba(0, 1, 1, 0.05);
    border-radius: 4px;
    background: #fff;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-NavButton {
    color: #999591 !important;
  }

  .DayPicker-NavButton--prev {
    right: auto;
    left: 1.5em;
    margin-right: 0;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px 0 0 0;
    padding: 16px 16px 0 16px;
    border-radius: 0 0 10px 10px;
  }

  .DayPicker-Caption {
    margin-bottom: 1em;
    padding: 0 1em;

    > div {
      text-align: center;
    }
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;

    &[aria-disabled='true'] {
      pointer-events: none;
    }
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--selected {
    background: #1DBFFA !important;
    border-radius: 3px;
    color: #232129 !important;
  }
`;

export const SelectHour = styled.div<IProvider>`
  margin-top: 40px;

  h3 {
    font-size: 18px;
    color: #464646;
    margin-bottom: 24px;
  }

  span {
    color: ${({ selected }) => (selected ? '#ffff' : '#464646')};
    margin-bottom: 12px;
    display: block;
  }

  ul {
    display: flex;
    margin-bottom: 10px;
    flex-wrap: wrap;
  }
`;

export const Hour = styled.li<IHour>`
  background: ${({ selected }) => (selected ? '#1DBFFA' : '#fff')};
  color: ${({ selected }) => (selected ? '#fff' : '#464646')};
  border-radius: 4px;
  padding: 0px 15px;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-right: 12px;
  margin-bottom: 12px;
    cursor: pointer;
            box-shadow: 1px 1px 8px rgba(0, 1, 1, 0.05);


`;

export const Button = styled.button`
  height: 50px;
  background: #1DBFFA;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: none;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  margin: 56px 0;
    cursor: pointer;
    box-shadow: 1px 1px 8px rgba(0, 1, 1, 0.05);


`;

export const Done = styled.div<IDone>`
  position: fixed;
  background: #fdfdfd;
  z-index: 9;
  top: 0;
  width: 100%;
  height: 100vh;
  display: ${({ active }) => (active ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    color: #3e3b47;
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 16px;
    margin-top: 40px;
  }

  p {
    max-width: 265px;
    text-align: center;
        font-weight: 600;
    font-size: 20px;

    color: #999591;
  }

  button {
    width: 80px;
    margin-top: 40px;
  }
`;
