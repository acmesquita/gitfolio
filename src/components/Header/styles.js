import styled from 'styled-components';

export const Container = styled.div`

  padding: 20px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;

  h1 {
    font-weight: 500;
  }

  h1 a{
    font-weight: 500;
    text-decoration: none;
    color: #333;
  }
  
  .username a {
    text-transform: uppercase;
    text-decoration: none;
    font-size: 12px;
    color: #333;
  }
`;
