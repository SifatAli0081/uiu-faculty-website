import React,{useEffect,useState} from 'react'
import Faculty1 from './Faculty1'
import Header from './Header'

const Faculty = () => {
    const [posts,setPosts] = useState([])
      useEffect(() =>{
        fetch('https://mocki.io/v1/3a7c3e74-e55f-4c91-9e9a-016837056374')
        .then((response)=>response.json())
        .then((data)=>{
            console.log("sampal",data);
            setPosts(data);  
        })
     },[]) 
  return (
    <div>
    <Header/>
    
    {
      posts.map((posts) => (<Faculty1
       name={posts.name}
       education={posts.education}
       designation={posts.designation}
       email={posts.email}
       salary={posts.salary}
        />   
      ))
    }
    </div>
  )
}

export default Faculty;