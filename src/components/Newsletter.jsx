"use client";
import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <StyledWrapper>
      <div className="newsletter-container">
        <p className="top-text">Get daily updates from Rookus</p>
        <div className="newsletter-form">
          <p className="heading">Subscribe to Our Newsletter</p>
          <form className="form">
            <label htmlFor="email">Email:</label>
            <input
              required
              placeholder="Enter your email address"
              name="email"
              id="email"
              type="email"
            />
            <input value="Subscribe" type="submit" />
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Dark-themed and wider newsletter form */
  .newsletter-container {
    text-align: center;
    margin-bottom: 20px;
  }

  .top-text {
    font-size: 26px;
    color: #ffffff;
    margin-bottom: 20px;
  }

  .newsletter-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 30px;
    border: 2px solid #222;
    border-radius: 10px;
    background-color: #1a1a1a;
    font-family: Arial, sans-serif;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 19px 38px, rgba(0, 0, 0, 0.35) 0px 15px 12px;
  }

  .heading {
    font-weight: bold;
    font-size: 24px;
    color: #ffffff;
  }

  .newsletter-form label {
    display: block;
    font-weight: bold;
    color: #cccccc;
    margin-bottom: 10px;
  }

  .newsletter-form input[type="email"] {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #444;
    border-radius: 6px;
    background-color: #333;
    color: #fff;
  }

  .newsletter-form input[type="email"]::placeholder {
    color: #999;
  }

  .newsletter-form input[type="submit"] {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 6px;
    background-color: #ff6600;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
  }

  .newsletter-form input[type="submit"]:hover {
    background-color: #ff8533;
  }
`;

export default Form;
