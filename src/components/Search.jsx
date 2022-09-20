import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import data from "../data";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const navigate = useNavigate();
  const [filterData, setFilterData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const SearchWord = e.target.value;
    const newfilter = data.filter((item) => {
      return item.username.toLowerCase().includes(SearchWord.toLowerCase());
    });

    if (SearchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newfilter);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGrp>
          <Input
            type="text"
            placeholder="What's your favorite champion ? "
            onChange={handleChange}
          />
          <Btn type="submit">
            <BiSearch size={20} color="white" />
          </Btn>
        </FormGrp>
      </Form>
      {filterData.length != 0 && (   
        <BottomBar>
          {filterData.slice(0, 5).map((value, key) => {
            return (
              <Filtertitle onClick={() => navigate(`/champs/${value.id}`)}>
                {value.username}
              </Filtertitle>
            );
          })}
        </BottomBar>
      )}
    </Container>
  );
};

export default Search;

const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  position: relative;
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
  ::placeholder {
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
  &:hover {
    background-color: #0e215550;
  }
`;

const BottomBar = styled.div`
  position: absolute;
  width: 335px;
  left: 0;
  background-color: #190f70cc;
  top: 8vh;
  left: 150px;
`;

const Filtertitle = styled.h3`
  font-size: 15px;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  padding: 10px 0px;
  &:hover {
    background-color: #1154b8;
  }
`;
