import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Location = ({ city, country, getWeather }) => {
  const [query, setQuery] = useState("");
  const [inputMode, setInputMode] = useState(false);
  const inputRef = useRef("");

  useEffect(() => {
    if (inputMode) {
      inputRef.current.focus();
    }
  }, [inputMode]);

  if (inputMode) {
    return (
      <Container>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <FormElement
            onSubmit={(e) => {
              e.preventDefault();
              getWeather(query);
            }}
          >
            <InputField
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            />
            <SearchButton type="submit">Search</SearchButton>
            <CancelButton onClick={() => setInputMode(false)}>X</CancelButton>
          </FormElement>
        </motion.div>
      </Container>
    );
  }
  return (
    <Container>
      <City onClick={() => setInputMode(true)}>{city}</City>
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;

const Container = styled.div`
  text-align: center;
`;

const City = styled.h1`
  font-family: "Merriweather", sans-serif;
  font-size: 1.6rem;
`;

const Country = styled.h3`
  font-size: 1.1rem;
`;

const FormElement = styled.form`
  text-align: center;
  display: flex;
  position: relative;
  background: #46618b;
  border-radius: 5px;
`;

const InputField = styled.input`
  padding: 5px;
  background: transparent;
  color: white;
  border: none;
  width: 80px;
  &:focus {
    outline: 0;
  }
`;

const SearchButton = styled.button`
  padding: 5px;
  background: #394e70;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: white;
  cursor: pointer;
`;

const CancelButton = styled.span`
  position: absolute;
  font-size: 0.8rem;
  background: #557fc2;
  cursor: pointer;
  width: 17px;
  height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #fff;
  top: -12px;
  right: -10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
`;
