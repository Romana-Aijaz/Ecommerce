import React, { useEffect, useState } from 'react'
import { popularProducts } from '../data';
import styled from 'styled-components';
import Product from './Product';
import axios from 'axios';

const Container = styled.div`
   padding: 20px;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`

const Products = ({cat, filters, sort}) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
  const response = await axios.get(  cat
    ? `http://localhost:8000/products/allProducts?category=${cat}`
    : "http://localhost:8000/products/allProducts");
    setProducts(response.data)
  console.log(response.data)
      }
      catch (err) {
        console.log(err)

      }
    }
    getProducts()
  },[cat])

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter(item=> 
        Object.entries(filters).every(([key, value]) => 
        item[key].includes(value)
        )
    )
    )
  }, [products, cat, filters])
  useEffect(() => {
    if (sort="newest"){
      setFilteredProducts((prev) => 
        [...prev].sort((a,b)=>a.createdAt-b.createdAt)
        )
    }
    else if ((sort === "asc")) {
      setFilteredProducts((prev) => 
        [...prev].sort((a,b)=>a.price-b.price)
        )
    }
    else {
      setFilteredProducts((prev) => 
        [...prev].sort((a,b)=>b.price-a.price)
        )
    }
  }, [sort])
  return (
    <Container>
         {cat ? filteredProducts.map((item)=>(
             <Product item={item} key={item.id}/>
         )) : products.slice(0,10).map((item) => <Product item={item} key={item.id} />)
        }
    </Container>
  )
}

export default Products;