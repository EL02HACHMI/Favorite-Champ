import React from "react";
import styled from "styled-components";
import data from "./data";
import Product from "./Product";
const Products = () => {
  return (
    <Container>
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
  top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #837a7a;
`;

const Wrapper = styled.div`
  width: 90%;
  background-color: beige;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
`;
