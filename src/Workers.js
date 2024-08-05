
import Worker from "./Worker";
 import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Workers(){
  const [userData,setdata]=useState([]);
  useEffect(()=>{
    axios.get("/workeres")
      .then((response)=>{
        console.log(response)
        setdata(response.data)
      },[])
    })
  
  return(<> This is worker page,
  
          {
        userData.map((data,key)=>{
          return(<div key={key}>
          <Worker fName={data.fname} mobNo={data.mobNo}/>
          </div>)
        })
      }
    
  </>);
  
};