import axios from "axios";
import {useState} from 'react';
import { useEffect } from "react";
import { productsAction } from "../../redux/actions/productsAction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CardsWithRedux from "../cards/CardsWithRedux";

function AllProductsWithRedux(){

    let [allProducts,setAllProducts]=useState([]);
    let dispatch=useDispatch();

    let productsData=useSelector((sotredata)=>{
        return sotredata.products;
    });
    useEffect(()=>{
        if(productsData.length===0){
            console.log("from server");
            console.log("length:",productsData.length)
            getProducts();
        }else{
            setAllProducts(productsData)
            console.log("from store");
        }
    },[productsData]);


    let getProducts=()=>{
        console.log("execute");
        var promiseObject=axios.get("https://fakestoreapi.com/products");
        promiseObject.then((res)=>{
            var action=productsAction(res.data);
            dispatch(action);
            //or
           /*  var action={
                type:"PRODUCT",
                payload:res.data,
            } */ 
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return(
        <div style={{padding:"50px"}}>
            <h2 style={{marginBottom:"20px"}}>All Products</h2>
            <p style={{ textAlign: "left",marginBottom:"20px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab sit quibusdam et asperiores tenetur officiis exercitationem, eos autem aut incidunt aspernatur sequi laboriosam eveniet corporis? Exercitationem, doloribus optio laboriosam debitis provident earum reiciendis, cum harum adipisci accusantium, velit placeat ducimus consequuntur sequi quam similique. Accusantium quaerat laudantium quia rerum asperiores, architecto illum voluptatem suscipit expedita, praesentium, rem reprehenderit veniam sunt! At esse nostrum veritatis quas dolor repudiandae molestiae ducimus, ab error quasi quam dicta. Unde temporibus ea impedit culpa, ullam vitae sequi adipisci voluptate expedita quas, placeat error asperiores minus corporis omnis similique! Adipisci aliquam vero delectus recusandae asperiores. Fugit!</p>
             <div className="allPrdouctsData">
                {/* use {} bcz inside jsx we need to use {} if we want to write any js code.  */}
               {        
                allProducts.map((ele)=>{
                    return <CardsWithRedux image={ele.image} title={ele.title} price={ele.price} rating={ele.rating.rate} id={ele.id}/>
                })
               } 
            </div>
        </div>
    );
}
export default AllProductsWithRedux;