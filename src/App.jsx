import React from 'react'

const App = () => {

  const getData=()=>{
    console.log('dat is  connected ')
  }
  return (
    <div className=' bg-black h-screen text-white'>
      <button onClick={getData}
      
      className='bg-green-600 active:scale-95 mb-3 px-5 py-2 text-white  rounded-2xl '> get date  </button>

    </div>
  )
}
usee
export default App