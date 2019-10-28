import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body{
    font: 14px 'Roboto', sans-serif;
    background: #fff;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
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

  .Groovy{
    background-image: url('https://dashboard.snapcraft.io/site_media/appmedia/2019/06/groovy255.png');
    background-size: 50px;
  }

  .PHP {
    background-image: url('https://atperson.com/wp-content/uploads/2019/02/Lenguaje-de-programaci%C3%B3n-PHP-1a.png');
    background-size: 50px;    
  }
`;