import styled from 'styled-components';

export const Container = styled.div`
  .headerUserName{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #e3e3e3;
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

  .listRepositores {
    padding: 15px;
  }

  .listRepositores .repositor {
    border: 1px solid #eeee;
    padding: 5px 15px;
    margin: 10px 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .listRepositores .repositor .info {
    margin-left: 20px;
    padding: 3px;
  }
`;
