import { useEffect, useState } from "react";
import axios from "axios";
import "./UsersJson.css";



function UsersJson(){
    let[users,setState]=useState([]);
    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers=()=>{
        axios.get("http://localhost:3000/result")
        .then((res)=>{
            //console.log(res.data);//Here .data is data in json after printing res we will get to know so keep res.data
            setState(res.data); //If we dont update setState then users length will be 0 then table wont print
        })
        .catch(()=>{
            alert("Some thing went wrong..");
        })
    };

    return (
        <div className="users-json">
           <h2>Users Information</h2> 
           {
            users.length>0 && <div style={{ margin:"30px auto", marginTop:"50px",width:"500px"}}>
                <table frame="box" rules="all" cellPadding="10" width={"100%"}>
                    <thead>
                        <tr>
                            <th style={{textAlign:"center"}}>Name</th>
                            <th style={{textAlign:"center"}}>City</th>
                            <th colSpan={3} style={{textAlign:"center"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((ele)=>{
                                return <tr>
                                    <td>{ele.name}</td>
                                    <td>{ele.city}</td>
                                    <td>
                                    <button className="btn-primary">Read</button>
                                    </td>
                                    <td>
                                    <button className="btn-success">Edit</button>
                                    </td>
                                    <td>
                                    <button className="btn-danger">Delete</button>
                                    </td>

                                </tr>
                            })
                        }
                    </tbody>
                </table>
                </div>
           }
        </div>
    );
}
export default UsersJson;