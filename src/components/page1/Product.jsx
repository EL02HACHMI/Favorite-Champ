import React, { useContext } from "react";
import styled from "styled-components";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

const Product = ({item }) => {

    
  
  return (
    <Container>
       <Link to={`/champs/${item.id}`}>
        <Image src={item.image} alt="image" />
       </Link>
      <Icon className="icon">
        <MdFavorite className="ic"  size={25} color="white" />
      </Icon>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  background-color: #14275e;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  cursor: pointer;
  border-radius: 10px;
`;

const Image = styled.img`
  background-position: cover;
  width: 200px;
  height: 200px;
  border-radius: 50px;
  margin: 10px;
`;

const Icon = styled.div`
  background-color: #1d4ccf24;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  &:hover .ic {
    transition: all 300ms ease-in-out;
    transform: scale(1.3);
  }
`;
