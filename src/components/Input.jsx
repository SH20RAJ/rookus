"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Input = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading or any asynchronous operation
    const timer = setTimeout(() => {
      setIsLoaded(true); // Set to true when loading is complete
    }, 500); // Adjust this duration as needed for your actual loading logic

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  if (!isLoaded) return null; // Don't render anything until fully loaded

  return (
    <StyledWrapper>
      <label className="search-label">
        <input
          type="text"
          name="text"
          className="input"
          required
          placeholder="Type here..."
        />
        <kbd className="slash-icon">/</kbd>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .search-label {
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid transparent;
    border-radius: 12px;
    overflow: hidden;
    background: #3d3d3d;
    padding: 9px;
    cursor: text;
  }

  .search-label:hover {
    border-color: gray;
  }

  .search-label:focus-within {
    background: #464646;
    border-color: gray;
  }

  .search-label input {
    outline: none;
    width: 100%;
    border: none;
    background: none;
    color: rgb(162, 162, 162);
  }

  .search-label input:focus + .slash-icon,
  .search-label input:valid + .slash-icon {
    display: none;
  }

  .search-label input:valid {
    width: calc(100% - 22px);
    transform: translateX(20px);
  }

  .slash-icon {
    position: absolute;
    color: #7e7e7e;
    right: 7px;
    border: 1px solid #393838;
    background: linear-gradient(-225deg, #343434, #6d6d6d);
    border-radius: 3px;
    text-align: center;
    box-shadow: inset 0 -2px 0 0 #3f3f3f, inset 0 0 1px 1px rgb(94, 93, 93),
      0 1px 2px 1px rgba(28, 28, 29, 0.4);
    cursor: pointer;
    font-size: 12px;
    width: 15px;
  }

  .slash-icon:active {
    box-shadow: inset 0 1px 0 0 #3f3f3f, inset 0 0 1px 1px rgb(94, 93, 93),
      0 1px 2px 0 rgba(28, 28, 29, 0.4);
    text-shadow: 0 1px 0 #7e7e7e;
    color: transparent;
  }
`;

export default Input;
