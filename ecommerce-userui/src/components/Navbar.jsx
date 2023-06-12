import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
margin-top: -10px;
    height: 60px;
    margin-bottom: 10px;
`

const Wrapper = styled.div`
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
  align-items: center;
    display: flex;
    justify-content: space-between;
`

const Left= styled.div`
flex: 1;
display: flex;
align-items: center;
`

const Language = styled.span`
font-size: 14px;
display: flex;
cursor: pointer;
`

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input = styled.input`
   border: none
`
const Logo = styled.h1`
   font-weight: bold;
`
const Centre= styled.div`
flex: 1;
text-align: center;
`
const Right= styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
margin-right: 25px;
`
const MenuItem = styled.div`
   font-size: 14px;
   cursor: pointer;
   margin-right: 25px;
`
const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>English
                </Language>
                <SearchContainer>
                      <Input />
                      <SearchIcon style={{color: "gray", fontSize:16}}/>
                    </SearchContainer>
            </Left>
            <Centre>
              <Logo>
                E-Commerce
              </Logo>
            </Centre>
            <Right>
              <MenuItem>REGISTER   </MenuItem>
              <MenuItem>SIGN IN</MenuItem>
              <Link to="/cart">
              <MenuItem>
              <Badge badgeContent={quantity} color="primary">
               <ShoppingCartIcon />
              </Badge>
              </MenuItem>
              </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar;