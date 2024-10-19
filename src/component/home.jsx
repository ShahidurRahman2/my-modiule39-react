import { useEffect, useState } from "react"
import './home.css'
export default function Home(){

    const [users,setUsers]=useState([]);

     useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(res=> res.json())
         .then(data=> setUsers(data))
     },[])

    return(
        <div>
            
        <h3 className='box'>this user {users.length}</h3>
        
        </div>
    )
}