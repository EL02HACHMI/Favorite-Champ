import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Alistar from './../../images/Alistar.jpg'
import Irelia from './../../images/Irelia.jpg'
import Rengar from './../../images/Rengar.jpg'
import Tahm from './../../images/Tahm.jpg'
import {AiFillDelete} from 'react-icons/ai'


import { useGlobalContext } from '../../ContextApi';






const Favorite = () => {

  const {favorites,removeFromFavorites}=useGlobalContext();


  let navigate=useNavigate()  
  return (
    <Container>
      <Wrapper>

      {favorites.map((champ)=>  
        <Card key={champ.id}>
          <Left>
            <Image src={champ.image}/>
          </Left>
          <Right>
            <Title>{champ.username}</Title>
            <AiFillDelete className='IconAi' size={25}  onClick={()=>removeFromFavorites(champ.id)}/>
          </Right>
        </Card>
        )
        }

       
        
      </Wrapper>
      <Button onClick={()=>navigate('/')}>Go Back</Button>
    </Container>
  )
}

export default Favorite









const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: 100vh;
font-family: 'Roboto',sans-serif;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #6b85c7;
  
`;


const Wrapper = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  `;

const Card = styled.div`
  background-color: #0f2669;
  margin: 10px 0px;
  color: white;
  height: 150px;
  width: 600px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
 width: 100%;
 height: 100%;
 object-fit: cover;
 padding: 10px;
 border-radius: 50px;
`;
const Title = styled.h3`
  letter-spacing: 1px;
  flex: 2;
  text-align: center;
  `;

const Right = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  .IconAi{
    flex: 1;
    cursor: pointer;
  }
`;

const Button = styled.div`
  padding: 10px;
  background-color: #0f2669;
  margin: 10px;
  border-radius: 10px;
  color:white;
  cursor: pointer;
`;