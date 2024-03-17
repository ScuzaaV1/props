import React from 'react'
import ProductCard from './ProductCard'

const ProductList = (props) => {
    // console.log("products",props)
  return (
    <div>
      {
        props.list.map((el,i)=><ProductCard key={i} product={el}  functionAlert={props.alertFunction} />)
      }
    </div>
  )
}

export default ProductList
