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

  .padrao{
    background-image: url('https://ucarecdn.com/99abb6d2-48e5-46ff-93e7-5b315acd7ccb/');
    background-size: 50px;
  }

  .HTML {
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png');
    background-size: 50px;
  }
  .JavaScript{
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png');
    background-size: 50px;
  }

  .Ruby{
    background-image: url('https://miro.medium.com/max/710/1*9hd_8qR0CMZ8L0pVbFLjDw.png');
    background-size: 50px;
  }

  .CSS{
    background-image: url('https://icon-library.net/images/css3-icon/css3-icon-28.jpg');
    background-size: 50px;
  }

  .Java {
    background-image: url('https://skillvalue.com/jobs/wp-content/uploads/sites/7/2019/07/java-developer-full-time-job-bucharest.png');
    background-size: 50px;
  }

  .Python {
    background-image: url('https://www.python.org/static/opengraph-icon-200x200.png');
    background-size: 50px;
  }
`;
