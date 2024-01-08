import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart ,useCart } from "./ContextReducer";


const Showcase = (props) => {
let dispatch= useDispatchCart();
  let options = props.options;
  let priceOptions = Object.keys(options)

  let data=useCart()
  let priceRef=useRef()

  const [qty,setQty]=useState(1)
  const [size,setSize]=useState("")

  const handleAddtoCart=async()=>{
    await dispatch({type:"ADD",id:props.foodItem._id,Name:props.foodItem.name,price:finalPrice,qty:qty,size:size,img:props.foodItem.img})
    console.log(data)
  }

  let finalPrice=qty* parseInt(options[size])
  useEffect(()=>{
    setSize(priceRef.current.value)
  })
  return (
    <>
      <div className="card mt-5 " style={{"width": "18rem","marginRight":"10px","marginLeft":"175px"}}>
        <img src={props.foodItem.img} className="card-img-top" alt="image thi" />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <p className="card-text">{props.foodItem.description}
          </p>
          <div className="container ">
            <select className="h-100 w-20 p-2 rounded" onChange={(e)=>setQty(e.target.value)}>
                {Array.from(Array(6),(e,i)=>{
                    return(
                        <option key={i+1} value={i+1}>{i+1}</option>
                    )
                })}
            </select>
            <select className=" h-100 p-2 m-2 rounded" onChange={(e)=>setSize(e.target.value)} ref={priceRef}>
                  {priceOptions.map((data)=>{
                    return <option key={data} value={data}>{data}</option>
                  })}
            </select>

            <div className="d-inline m-2 fs-6">₹{finalPrice}</div>
          </div>
          <a href="#" className="btn btn-primary mt-3 d-flex flex-column justify-items-center" onClick={handleAddtoCart}>
            Add to cart
          </a>
        </div>
      </div>
    </>
  );
};

export default Showcase;
