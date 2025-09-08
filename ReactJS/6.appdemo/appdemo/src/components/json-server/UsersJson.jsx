import { useEffect, useState } from "react";
import "./UsersJson.css";
import axios from "axios";
import C from "../parent-child/C";



function UsersJson({getUsers,users,setIsNewUser,setNewUser}){
    
    useEffect(()=>{
        getUsers();
    },[]);

    const deleteUser=(id)=>{
        const confirm=window.confirm("Would you like to delete?");
        if(confirm){
            axios.delete(`http://localhost:3000/result/${id}`)
            .then(()=>{
                getUsers(); 
            })
            .catch((err)=>{
                console.log(err);
            });
        }
    }
    
    const updateUser=(users)=>{
        setIsNewUser(false);
        setNewUser(users);
    }

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
                            <th colSpan={2} style={{textAlign:"center"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((ele)=>{
                                return <tr>
                                    <td>{ele.name}</td>
                                    <td>{ele.city}</td>
                                    <td>
                                    <button onClick={()=>{
                                        updateUser(ele);
                                    }} className="btn-success">Edit</button>
                                    </td>
                                    <td>
                                    <button onClick={(e)=>{
                                        deleteUser(ele.id);
                                    }} className="btn-danger">Delete</button>
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