import React, { useState } from 'react'

const Login = () => {

  const [value,setValue] = useState({name:"",
    password:""})

    const handleLogin = () => {
      
    }
  return (
    <div className='flex flex-col justify-between'>
      <div className='flex items-center justify-center h-screen w-full md:min-w-auto'>

      </div>
      <div className='w-96 h-96 bg-white rounded-md m-2'>
        <div className='flex flex-col items-center justify-center'>
          <input type='password' placeholder='Password'/>
          <input type='text' placeholder='Username'/>
        </div>
        <div>
          <Button className='border bg-[#1E88E5] text-center p-2'>Login</Button>
        </div>

      </div>
    </div>
  )
}

export default Login
