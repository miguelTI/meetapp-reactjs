import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 10px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 900px;
      height: 250px;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.1);
      border: 0;
    }

    input {
      display: none;
    }
  }
`;
