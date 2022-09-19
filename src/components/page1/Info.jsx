import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import data from '../../data'
const Info = () => {
  const { id } = useParams();
  const navigate=useNavigate();
  const items=data.find((item)=>item.id == id )
  const{image,username}=items;
  return (
    <Container>
      <Wrapper>

        <h2>Champion Card</h2>
     
       <Card key={id}>
          <Img>
          <Image src={image} alt="Champs icon" />
          </Img>
          <Grp>
            <Title>{username}</Title>
            <Desc>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, voluptate natus delectus doloribus minima error
              quidem facilis pariatur alias impedit!
            </Desc>
          </Grp>
        </Card>
      
      </Wrapper>
      <Btn onClick={()=>navigate('/')}>Back home</Btn>
    </Container>
  );
};

export default Info;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #5434a0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;

const Wrapper = styled.div`
  width: 90%;
  background-color: #083f5f;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;

  h2{
    padding: 10px 0px; 
    font-size: 30px;
    text-decoration : underline ;
  }
`;

const Card = styled.div`
padding: 10px;  
  width: 100%;
  height: 100%;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.div`
  padding: 10px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  `
const Image = styled.img`
  object-fit: cover;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 100%;
  /* padding: 10px; */
  background-color: inherit;
  border-radius: 50px;
  `;
const Grp = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const Title = styled.h3`
  font-size: 25px;
  font-weight: 500;
`;
const Desc = styled.p`
  font-weight: 300;
  width: 85%;
  text-align: justify ;
  padding: 10px 0px;
  letter-spacing: 1px;
`;


const Btn = styled.div`
margin: 10px 0px;
font-family: 'Roboto',sans-serif;
  color: white;
  padding: 10px;
  border-radius: 10px;
  background-color: #391a559b;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
`;