import styled from 'styled-components';

export const Container = styled.div`
  .headerUserName{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #e3e3e3;
    padding: 15px 0;
  }

  .headerUserName img {
    width: 200px;
    height: 200px;

    border-radius: 100px;
    border: 1px solid #e3e3e3;

    margin: 0 20px;
  }

  .headerUserName .info {
    word-wrap: break-word;
    height: 100%;
    margin-left: 30px;
  }

  .headerUserName .info h2{
    margin-bottom: 20px;
    padding:0px;
  }

  .headerUserName .publish {
    display: flex;
    width: 50px;
    height: 200px;
  }

  .headerUserName .publish a {
    text-decoration: none;
    text-transform: uppercase;
    color: #333;
  }
  h2 {
    padding: 15px;
  }
  .list {
    margin-left: 20%;
    display: flex;
    width: 60%;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  h2 a{
    font-size: 12px;
    font-weight: 500;
    color: #333;
  }
  h2 a:hover{
    text-decoration: none;
  }

`;
