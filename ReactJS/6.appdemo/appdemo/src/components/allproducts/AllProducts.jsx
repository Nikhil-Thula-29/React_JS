import axios from "axios";
import './AllProducts.css';
import Cards from "../cards/Cards";
import {useState} from 'react';
function AllProducts(){

    let [allProducts,setAllProducts]=useState([]);
    let getProducts=()=>{
        var promiseObject=axios.get("https://fakestoreapi.com/products");
        promiseObject.then((res)=>{
            console.log(res.data);
            setAllProducts(res.data);   //stores data from here
        }).catch((error)=>{
            console.log("error");
            console.log(error);
        })
    }

    return(
        <div style={{padding:"50px"}}>
            <h2 style={{marginBottom:"20px"}}>All Products</h2>
            <p style={{ textAlign: "left",marginBottom:"20px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab sit quibusdam et asperiores tenetur officiis exercitationem, eos autem aut incidunt aspernatur sequi laboriosam eveniet corporis? Exercitationem, doloribus optio laboriosam debitis provident earum reiciendis, cum harum adipisci accusantium, velit placeat ducimus consequuntur sequi quam similique. Accusantium quaerat laudantium quia rerum asperiores, architecto illum voluptatem suscipit expedita, praesentium, rem reprehenderit veniam sunt! At esse nostrum veritatis quas dolor repudiandae molestiae ducimus, ab error quasi quam dicta. Unde temporibus ea impedit culpa, ullam vitae sequi adipisci voluptate expedita quas, placeat error asperiores minus corporis omnis similique! Adipisci aliquam vero delectus recusandae asperiores. Fugit!</p>
            <button onClick={getProducts}>Get Products</button>
             <div className="allPrdouctsData">
                {/* use {} bcz inside jsx we need to use {} if we want to write any js code.  */}
               {
                allProducts.map((ele)=>{
                    return <Cards image={ele.image} title={ele.title} price={ele.price} rating={ele.rating.rate}/>
                })
               } 
            </div>
        </div>
    );
}
export default AllProducts;