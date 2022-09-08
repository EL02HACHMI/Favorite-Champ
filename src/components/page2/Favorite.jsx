import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';





const Favorite = () => {


  let navigate=useNavigate();





  return (
    <Container>
      <h1>Favorite Section</h1>
      <Wrapper>
        <Favoritecard>
          <FavIcon src='' alt="Image"/>
          <Title>Ashe</Title>
        </Favoritecard>

        <Favoritecard>
          <FavIcon src='' alt="Image"/>
          <Title>Akshan</Title>
        </Favoritecard>


        <Favoritecard>
          <FavIcon src='' alt="Image"/>
          <Title>Heimerdinger</Title>
        </Favoritecard>


        <Favoritecard>
          <FavIcon src='' alt="Image"/>
          <Title>Lux</Title>
        </Favoritecard>

        <Favoritecard>
          <FavIcon src='' alt="Image"/>
          <Title>Irelia</Title>
        </Favoritecard>

      </Wrapper>
      <Button onClick={()=>navigate('/', { replace: true })}> GO BACK</Button>
    </Container>
  )
}

export default Favorite






const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #bcd9eb;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  h1{
    font-weight: 800;
    color: #044d77;
  }
  
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;
const Favoritecard = styled.div`
margin: 10px 0px;
  width: 50%;
  background-color: #387294;
  height: 100px;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;
const FavIcon = styled.img`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
`;
const Title = styled.h3`
  flex: 2;
  display: flex;
  color: #181717;
  font-weight: 800;
  justify-content: center;
`;

const Button = styled.div`
  background-color: #044d77;
  padding: 10px;
  margin: 10px 0px;
  border-radius: 10px;
  font-weight: 600;
  color: white;
  cursor: pointer;
`;