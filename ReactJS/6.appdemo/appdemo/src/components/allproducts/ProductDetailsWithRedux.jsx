import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import UseEffect from "../lifeCycle/UseEffect";
import { useDispatch } from "react-redux";
import { SingleProduct } from "../../redux/actions/SingleProduct";


function ProductDetailsWithRedux(){
    let {id,x}=useParams(); //parameters={id:20,x:35.5}
    let dispatch=useDispatch();


    let productData=useSelector((storedata)=>{
         return storedata.products.filter((prod)=>{
              return prod.id==id;
        })
    });

    useEffect(()=>{
        if(productData.length===0){
            console.log("from server");
           fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            var action=SingleProduct(data);
            dispatch(action);
            
        })
        .catch((error)=>{
            console.log(error);
        })
        }
        else{
              console.log("Using store data", productData);
        }
    },[]);

     if (productData.length === 0) {
        return <p>Loading product...</p>;
    }
     let product = productData[0];
   
    return (
        <div>
            <h2>Product Details</h2>
            <div>
            <p>Product Id: {product.id} </p>
            <img src={product.image} width={500} height={400}/>
            <p>Title: {product.rating.rate} </p>
            <p>Count: {product.rating.count}</p>
            <p>Category: {product.category} </p>
            </div>
            
        </div>
    );
}
export default ProductDetailsWithRedux;