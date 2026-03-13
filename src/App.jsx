import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
   const [userData,setUserData]= useState([]);



  // const getData= async()=>{
 
  //    const  response = await axios.get('https://picsum.photos/v2/list')
  //    console.log(response)
  // }

  const getData= async()=>{
   
     const  response = await axios.get('https://picsum.photos/v2/list')
     setUserData(response.data)
     console.log(response.data)
     
  }
  let printUserData = 'no user avilable'

  if(userData.length >0){
    printUserData = userData.map(function(elem,idx){

      return <div key ={idx}>
       <a href={elem.url}>
          <div>
        <img className='h-20' src={elem.download_url} alt="" />
      </div>
      <h2>
        {elem.author}
      </h2>
       </a>
      </div>
    })
    

  }

  return (
    <div className=' bg-black overflow-auto h-screen text-white'>
      <button onClick={getData}
      
      className='bg-green-600 active:scale-95 mb-3 px-5 py-2 text-white  rounded-2xl '> get date  </button>
<div className=' flex  flex-wrap gap-5'>
  {printUserData}
</div>
    </div>
   
  )
}

export default App