import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    text-align: center;

    > a {
      margin-top: 20px;
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
  }

  h1 {
    color: #666;
    font-size: 64px;
  }

  strong {
    color: #fff;
    font-size: 32px;
    margin: 0 15px;
  }
`;
