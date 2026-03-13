import React from 'react'
import axios from 'axios'
const App = () => {

  const getData= async()=>{
 
     const  response = await axios.get('https://picsum.photos/v2/list')
     console.log(response)
  }


  return (
    <div className=' bg-black h-screen text-white'>
      <button onClick={getData}
      
      className='bg-green-600 active:scale-95 mb-3 px-5 py-2 text-white  rounded-2xl '> get date  </button>

    </div>
  )
}

export default App