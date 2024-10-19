import { useEffect, useState } from "react";
import Friend from "./friend";
export default function friends(){
    const [friends,setFriends]=useState([])
    useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res=> res.json())
     .then(data=> setFriends(data))
    },[])
    return(
        <div>
            {
            friends.map(friend =>
                 <Friend friend={friend}></Friend>)}
            
            <h3 >im from friends length {friends.length}</h3>
        </div>
        
    )
}