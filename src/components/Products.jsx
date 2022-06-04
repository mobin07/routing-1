import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";

const Products = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    fetch("http://localhost:9090/products")
    .then((r)=>r.json())
    .then((d)=>setProducts(d))
  },[])
  return (
    <div>AppProducts
      {products.map((p)=>(
        <div key={p.id}>
          {p.name+"-"+p.price}
          <button> <Link to={`/products/${p.id}`}> More Details</Link></button>
        </div>  
    
      ))}
    </div>
  )
}

export default Products