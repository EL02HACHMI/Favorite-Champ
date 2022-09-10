import React from "react";
import styled from "styled-components";
import { MdFavorite } from "react-icons/md";
import { Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Navbar = () => {


  let navigate=useNavigate();
  
  return (
    <Container>
      <Badge badgeContent={4} color="primary">
        <MdFavorite size={30} color="white" className="favicon" onClick={()=>navigate('/favorite', { replace: true })} />
      </Badge>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
position: fixed;
top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #17327e;
  z-index: 1000;
  height: 10vh;
  width: 100%;
  .favicon{
    cursor: pointer;
  }
`;
