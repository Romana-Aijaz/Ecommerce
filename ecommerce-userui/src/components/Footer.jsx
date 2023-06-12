import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

const Container = styled.div`
      display: flex;
`
const Left = styled.div`
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 20px;
`
const Logo = styled.h1``

const Desc = styled.p`
 margin: 20px 0px;
`

const SocialContainer = styled.div`
display: flex;
`

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`

const Center = styled.div`
       flex: 1;
       padding: 20px;
`
const Title = styled.h3`
       margin-bottom: 30px;
`
const List = styled.ul`
       margin: 0;
       padding: 0;
       list-style: none;
       display: flex;
       flex-wrap: wrap;
`

const ListItem = styled.li`
       width: 50%;
       margin-bottom: 10px;
`
const Right = styled.div`
       flex: 1;
       padding: 20px;
`
const ContactItem = styled.div`
       margin-bottom: 20px;
       display: flex;
       align-items: center;
`

const Payment = styled.img`
      width: 60%;
      cursor: pointer;
`
const Footer = () => {
  return (
    <Container>
       <Left>
        <Logo>E-Commerce</Logo>
        <Desc>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
            by injected humour, or randomised words which don't look even slightly believable.
        </Desc>
        <SocialContainer>
           <SocialIcon color="3B5999">
              <FacebookIcon />
           </SocialIcon>
           <SocialIcon color="E4405F">
              <InstagramIcon />
           </SocialIcon>
           <SocialIcon color="55ACEE">
              <TwitterIcon />
           </SocialIcon>
           <SocialIcon color="E60023">
              <PinterestIcon />
           </SocialIcon>
        </SocialContainer>
       </Left>
       <Center>
         <Title>Useful Links</Title>
         <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Home</ListItem>
            <ListItem>Terms</ListItem>
         </List>
       </Center>
       <Right>
        <Title>Contact</Title>
        <ContactItem>
            <RoomIcon style={{marginRight: "10px"}}/>
           622 street 2, Margala Road, F-6/3 Islamabad, Pakistan.
        </ContactItem>
        <ContactItem>
        <PhoneIcon style={{marginRight: "10px"}}/>
          +92 332 2782 820
        </ContactItem>
        <ContactItem>
            <MailOutlinedIcon style={{marginRight: "10px"}}/>
          contact@ECommerce.com
        </ContactItem>
        <Payment src="http://localhost:3000/payment.jpg" />
       </Right>
    </Container>
  )
}

export default Footer