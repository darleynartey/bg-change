import React from 'react'
//import useState and useeffect from react
import { useState, useEffect } from 'react';

const FetchApi = () => {
//declare useState
const [posts, setPosts] = useState([]);

//declare useEffect
useEffect(()=>{
    //data fetching
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>response.json())
    .then((data)=>{
       console.log(data)
       setPosts(data)
    })
    .catch((error)=>{
       console.log(error)
    });
},[]);

  return (
    <div>
        {posts.map((post)=>{
            return(
               <div key={post.id}>
                 <h1>{post.title}</h1>
               </div>
            )
        })}
    </div>
  )
}

export default FetchApi