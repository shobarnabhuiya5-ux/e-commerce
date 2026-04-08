import React, {useState, useEffect} from 'react'

const ApiTest = () => {
    const [userData,setUserData]=useState([]);


   useEffect(() =>{
     fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) =>{
        return res.json();
    })
    .then((data) =>{
        setUserData(data);
    });

   },[]);
   console.log(userData);
  return <div>
    {
        userData.map((user)=(
            <h1>{user.name}</h1>
        ))
    }
  </div>;
  
  
};

export default ApiTest;
