import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 18px;

  header {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;

    strong {
      color: #fff;
      font-size: 32px;
      margin: 0 15px;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > button,
  a {
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
    margin-left: 10px;

    &:hover {
      background: ${darken(0.05, '#f94d6a')};
    }

    span {
      margin-left: 10px;
    }
  }

  a {
    background: #4dbaf9;
    margin-left: 0;

    &:hover {
      background: ${darken(0.05, '#4dbaf9')};
    }
  }
`;

export const Avatar = styled.img`
  width: 900px;
  height: 300px;
  border-radius: 4px;
  margin-top: 46px;
`;

export const Description = styled.div`
  margin-top: 26px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 26px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
`;
