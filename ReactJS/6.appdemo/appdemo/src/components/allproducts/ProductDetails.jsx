import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

function ProductDetails(){
    let {id}=useParams();
    let[state,setState]=useState({
        id:"",
        image:"",
        title:"",
        price:"",
        rating:"",
        category:"",
    });
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data);
            setState(data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[]);

   
    return (
        <div>
            <h2>Product Details</h2>
            <div>
            <p>Product Id: {state.id} </p>
            <img src={state.image} width={500} height={400}/>
            <p>Title: {state.title} </p>
            <p>Price: {state.price} </p>
            <p>Rating: {state.rating.rate} </p>
            <p>Count: {state.rating.count}</p>
            <p>Category: {state.category} </p>
            </div>
            
        </div>
    );
}
export default ProductDetails;