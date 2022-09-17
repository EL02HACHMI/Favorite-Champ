import React from 'react'
import styled from 'styled-components';
import { BiSearch } from "react-icons/bi";  
import { useState } from 'react';

const Search = () => {


  const [search,setSearch]=useState("") 

  const handleSubmit=(e)=>{
    e.preventDefault()
  }


  return (
    <Container> 
        <Form onSubmit={handleSubmit}>
          <FormGrp>
            <Input type="text" placeholder="What's your favorite champion ? " value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <Btn type="submit"><BiSearch size={20} color="white" /></Btn>
          </FormGrp>
        </Form>
    </Container>
  )
}

export default Search


const Container = styled.div`
  width: 50%;    
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

`;
const FormGrp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
`;
const Input = styled.input`
  height: 100%;
  width: 50%;
  outline: none;
  padding: 0px 10px;
  ::placeholder{
    opacity: 75%;
  }
`;
const Btn = styled.button`
  height: 100%;
  padding: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #143a74a2;
  cursor: pointer;
  outline: none;
  border: none;
  transform: all 300ms ease-in-out;
  &:hover{
    background-color: #1e55a8;

  }
`;