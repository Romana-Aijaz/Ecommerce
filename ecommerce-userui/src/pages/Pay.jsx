import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
const KEY = 'pk_test_51L5ah3HGD1qyTXcMlAN6AgPWT7BHk9tRJ7BYPdZGXw7E57ScNU4n3b39mGGrAYkjf9szxGlJHsx6WcEmSZAYOkCw00TklUpCAD'
const Container = styled.div`
   padding: 20px;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   height: 100%;
`
const Button = styled.button`
padding: 10px;
display: flex;
flex-wrap: wrap;
justify-content: center;
border-radius: 5px;
width: 100px;
`

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null)
  const onToken = (token) => {
    setStripeToken(token)
    console.log(token)
  }
  useEffect(() => {
    console.log(stripeToken)
    const makeRequest = async () => {
      try {
       const res = await axios.post("http://localhost:8000/payment", 
       {tokenId: stripeToken.id, amount: 2000})
       console.log(res.data)
      }
      catch (err) {

      }
    }
    stripeToken && makeRequest()
  }, [stripeToken])
  return (
    <Container>
       <StripeCheckout name='Shop' billingAddress shippingAddress 
       description='total is $20'
       amount={2000}
       token={onToken}
       stripeKey={KEY}
       > <Button>pay</Button></StripeCheckout>
    </Container>
  )
}

export default Pay;