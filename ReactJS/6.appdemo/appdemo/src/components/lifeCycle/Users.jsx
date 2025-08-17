import { useEffect, useState } from "react";

function Users(props){
    const[user,setUser]=useState([]);

    useEffect(()=>{
        getUser();
    },[]);

    const getUser=async()=>{
        var res=await fetch("https://jsonplaceholder.typicode.com/users")
        var data=await res.json()
        setUser(data);
    }   

    return (
        <div>
            <h2>Users Component</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio aliquam ut enim. Deserunt voluptatum facilis quibusdam ut commodi dolore, eaque temporibus nostrum laborum laudantium nesciunt voluptatibus provident numquam? Atque quaerat iure voluptatem distinctio, ea aperiam quae commodi obcaecati voluptas et ullam at fugit officiis impedit provident ratione quo sit odio, similique veritatis quidem qui! Sunt ex adipisci, aperiam repudiandae obcaecati magni accusantium necessitatibus facilis rem aliquid dolorem possimus. Cupiditate excepturi ab molestiae fugiat hic amet adipisci nulla soluta, ducimus officiis alias. Voluptatum, odit! Inventore deserunt consequuntur maiores magni. Officiis error aliquam nemo molestias explicabo, temporibus ipsam eos deleniti perspiciatis ut?</p>
            <button onClick={getUser}>Get Users</button>
            {
            user.length>0?<ol style={{textAlign: "left", paddingLeft: "50px" }}>
                {
                    user.map((ele)=>{
                        return <li>{ele.name}</li>
                    })
                }
            </ol>:<h2 style={{color:"red"}}>No Users Found</h2>
        }
        </div>
    );
}
export default Users;