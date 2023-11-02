import React, { useEffect, useState } from 'react'
import User from './User'

const About = () => {


  const[user,setUser]=useState("");

  useEffect(()=>{
    fetchUser();
  },[])

  const fetchUser=async()=>{
    const data=await fetch('https://api.github.com/users/Shivam-ku539')

    const json=await data.json();
    console.log("api called",json)
    setUser(json)
  }

  return (
    <div>
        <User name={user.name}location={user.location}
        image={user.avatar_url}
        contact={user.email}/>
    </div>
  )
}

export default About