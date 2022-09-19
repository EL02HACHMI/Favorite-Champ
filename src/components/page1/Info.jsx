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
        <Head>
      <Btn onClick={()=>navigate('/')}>home</Btn>
        <h2>Champion Card</h2>
        </Head>
     
       <Card key={id}>
          <Img>
          <Image src={image} alt="Champs icon" />
          </Img>
          <Grp>
            <Title>{username}</Title>
            <Desc>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione culpa, at eligendi, corrupti magni dolor alias laboriosam vitae, reprehenderit voluptas explicabo. Amet facere quo impedit dignissimos vitae maxime rerum nobis?
            </Desc>
          </Grp>
        </Card>
      
      </Wrapper>
    </Container>
  );
};

export default Info;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #14275e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;
 
const Head = styled.div`
width: 100%;
  display:flex;
  justify-content: space-around;
  margin: 10px 0px;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;

  h2{
    padding: 10px 0px; 
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: capitalize;
  }
`;

const Card = styled.div`
padding: 10px;  
  width: 100%;
  height: 100%;
  flex-direction: row;
  background-color: #0F2669;

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
  line-height: 2rem;
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
  color: #0F2669;
  background-color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  text-transform: capitalize;
  letter-spacing: 1px;
`;