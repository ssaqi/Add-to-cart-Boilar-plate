import React from 'react'
import Footer from './Footer'
import './Mix.css'
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../feature/cartSlice";
function Main() {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();
  return (
    <>

    <div className='container'>
        <br/><br/>
     <h3>Products</h3>
     <br/>
    <div className="row row-cols-1 row-cols-md-3 g-4">
    {items.map((item) => (
     
  <div className="col">
    <div className="card">
      <img src={item.img} className="card-img-top img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">
          {item.price}
        </p>
        <Button variant="contained"  onClick={() => dispatch(addToCart(item))}>Add to cart</Button>
      </div>
    </div>
  </div>


))}
 
 </div>
</div>
    <Footer/>
    </>
  )
}

export default Main