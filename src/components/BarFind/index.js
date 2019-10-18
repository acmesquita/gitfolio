import React, { useState } from 'react';

import { Container } from './styles';

export default function BarFind({ router, placeholder }) {

  const [userName, setUserName] = useState("");

  function find(event){
    if(event.key=== 'Enter'){
      document.querySelector('#linkFind').click();
    }
  }

  function handleUserName(event){
    setUserName(event.target.value)
  }

  return (
    <Container>
      <input 
        value={userName}
        onChange={handleUserName}
        onKeyPress={find}
        placeholder={placeholder}
      />
      <a 
      id="linkFind"
      href={`/${router}/${userName}`}>Search</a>
    </Container>
  );
}
