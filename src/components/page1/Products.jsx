import React from "react";
import styled from "styled-components";
import data from "./data";
import Product from "./Product";
const Products = () => {
  return (
    <Container>
      <Title>Choose your <b>favorite</b> champ</Title>
      <Wrapper>
        {data.map((item) => {
          return (
            <Product
              image={item.image}
              username={item.username}
              key={item.id}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Products;

const Container = styled.div`
  position: relative;
  font-family: 'Open Sans', sans-serif;
  top: 10vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bcd9eb;
  width: 100%;
  height: 100%;
`;


const Title = styled.h3`
  font-weight: 500;
 font-size: 30px;
 text-transform: uppercase;
 margin: 10px 0px;
 b{
  color: #044d77;
  font-weight: bold;
  text-decoration: underline;
 }
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
`;
