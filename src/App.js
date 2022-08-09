import React, { useState } from "react";
import styled from "styled-components";
import "./index.css";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
`;
const Form = styled.form`
  width: 50%;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Grp = styled.div`
  margin: 10px 0px;;
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
  width: 600px;
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
  
  
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
const Person = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;

`

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [data, setData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (username && email && pwd) {
      const person = { username, email , pwd};
      setData((item) => {
        return [...item, person];
      });
      console.log(data);
      setUsername("");
      setEmail("");
      setPwd("");
    } else {
      console.log("Empty values");
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Authentication</Title>
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

        <Grp>
          <span>Password : </span>
          <input
            type="password"
            name="psw"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </Grp>
        
        <Btn type="submit">Sign up</Btn>
      </Form>
      {
        data.map((item,index)=>{
          const {id,username,email,pwd}=item;
          return(
            <Item  key={id}>
              <Person>
                <Username>{username}</Username>
                <Email>{email}</Email>
                <Email>{pwd}</Email>
              </Person>
            </Item>
          )
        })
      }

    </Container>
  );
};

export default App;
