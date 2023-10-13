import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProductList = () => {

    const [ products, setProducts] = useState([])

    const getAllProducts = () => {
        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            console.log("Product res", res);
            setProducts(res.data)
        })
        .catch((err) => {
            console.log("Product err", err);
        })
    }

    useEffect(() => {
        getAllProducts();
    }, [])

  return (
    <div>
        {products?.map((data) => {
            return(
                <p>{data.title}</p>
            )
        })}
    </div>
  )
}

export default ProductList