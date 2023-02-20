import React from 'react'
import Navbar from './Navbar'

function Home() {
  return (
    <>
   <div className='main' 
   style={{width:"100%", 
   height:"300px",
   backgroundColor:"Lightgery"}}
   >
     <div className='container'>
     {/* <h4>Sign Form</h4> */}
   <br/>
   <input type='text'  placeholder='Enter Your Name'/>
   <br></br> <br></br>
   <input type='text'  placeholder='Enter Your Email'/>
   <br></br>  <br></br>
   <input type='text'  placeholder='Enter Your Contact no'/>
   <br></br><br></br>
   <input type='text'  placeholder='Enter Your Password'/>
   <br></br> <br/>
   <button>Sent</button>
   </div>
   </div>

     
    </>
  )
}

export default Home