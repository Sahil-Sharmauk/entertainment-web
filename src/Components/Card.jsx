import React, { useEffect, useState } from 'react'
export default function Card() {
  const [allData, setAllData] = useState([])
  useEffect(()=>{
    console.log("Here")
    let url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US'
    let options = {
      "Authorization":'Bearer',
      "accept":'application/json'
    }
    let data  = fetch(url,{
      headers: options
    }).then(async (res)=>{
      let data = await res.json()
      console.log("data",data)
      setAllData(data?.results)
      
    }).catch(err=> console.log("Error while fteching all data",err))
  },[])

  return (
    <>
    {allData.lenght > 0 && 
      allData.map((ele)=>{
      <div style={{border:"1px solid white"}}>
        <img src="" alt="not found" width={100} height={100}></img>
      </div>
      })
    }
    </>
   
  )
}
