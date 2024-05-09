import React from 'react'
import SingleFlags from './SingleFlags'
import { useEffect,useState } from 'react'
const Flags = () => {
  const [flags,setFlags]=useState([]);
  const [loading,setLoading]=useState(false)
  
  const flagDisplay=async()=>{
    setLoading(true)
    const url="https://restcountries.com/v3.1/all"
    try {
       
       
        const res= await fetch(url)
        const  data= await res.json()
        // console.log(data,"data");
        setFlags(data)  
        // console.log(flags,"flagss")
        
    } catch (error) {
      console.log(error); 
      
    } 
   
setLoading(false) 
  }

  useEffect(()=>{
    flagDisplay()
},[])
//   console.log(flags,"flags");
  if(loading) return <h3>Loading....</h3>
  return (
    <div className='flags-container'>
        {
            flags.map((item)=>{
                return (
                    <SingleFlags key={item.ccn3} {...item}/>
                )
            })
        }

    </div>
  )
}

export default Flags