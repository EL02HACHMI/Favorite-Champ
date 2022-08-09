import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
`;
const Form = styled.form``;

const Grp = styled.div`
  display: flex;
  margin: 100px;
  align-items: center;
`;

const Btn = styled.button`
  padding: 20px;
  border: none;
  background-color: black;
  border-radius: 10px;
  color: white;
  float: right;
  cursor: pointer;
`;
const Item = styled.div`
  display: flex;
  background-color: yellow;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
`
const Username = styled.h3`
  font-size: 20px;
  font-weight: 600;
  font-family: sans-serif;
  margin: 0px 10px;
`
const Email = styled.p`
  font-size: 15px;
  font-weight: 300;
`

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (username && email) {
      const person = { username, email };
      setData((item) => {
        return [...item, person];
      });
      console.log(data);
      setUsername("");
      setEmail("");
    } else {
      console.log("Empty values");
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Welcome to Morocco</Title>
        <Grp>
          <span>Username :</span>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grp>
        <Grp>
          <span>Email : </span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grp>
        
        <Btn type="submit">Sign up</Btn>
      </Form>
      {
        data.map((item,index)=>{
          const {id,username,email}=item;
          return(
            <Item  key={id}>
                <Username>{username}</Username>
                <Email>{email}</Email>
            </Item>
          )
        })
      }

    </Container>
  );
};

export default App;
