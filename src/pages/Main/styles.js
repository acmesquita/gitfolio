import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-top: 17%;
  justify-content: center;
  align-content: center;
`;

export const Wrapper = styled.div`

  display: inline-block;

  h1 {
    font-size: 70px;
    text-align: center;
    padding: 10px;
    font-weight: 500;
  }

  h2 {
    font-size: 30px;
    text-align: center;
    padding-bottom: 10px;
    font-weight: 500;
  }

  .links {
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 10px;
  }

  .links a {
    text-decoration: none;
    text-transform: uppercase;
    color: #777;
    text-align: center;
  }
`;
