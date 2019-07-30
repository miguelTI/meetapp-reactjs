import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;

    > a {
      display: flex;
      flex-direction: row;
      padding: 10px 20px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      align-items: center;

      &:hover {
        background: ${darken(0.05, '#f94d6a')};
      }

      span {
        margin-left: 10px;
      }
    }

    strong {
      color: #fff;
      font-size: 32px;
      margin: 0 15px;
    }
  }

  ul {
    display: flex;
    margin-top: 30px;
    flex-direction: column;
  }
`;

export const Meetup = styled.li`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 20px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  opacity: ${props => (props.past ? 0.6 : 1)};

  &:first-of-type {
    margin-top: 0;
  }

  strong {
    display: block;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    background: transparent;
    border: none;
  }

  span {
    margin-right: 20px;
    color: rgba(255, 255, 255, 0.6);
  }
`;
