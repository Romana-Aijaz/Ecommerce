import React, { useEffect, useState } from 'react'
import "./gig.css"
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("http://localhost:3000/image.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;


const Gig = () => {
return (
    <div>
       <Container>
      <div className='Wrapper'>
         <h2 className='heading'>Services</h2>
         <h3 className='inner'>Articles</h3>
         <h3 className='inner'>Blogs</h3>
         <h3 className='inner'>Reports</h3>
         <h3 className='inner'>Proofreading</h3>
      </div>
    </Container>
    </div>
)
}

export default Gig;