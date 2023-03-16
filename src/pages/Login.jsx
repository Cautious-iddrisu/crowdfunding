import { HomeIcon } from '@heroicons/react/24/solid'
import { data } from 'autoprefixer'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {CustomButton} from '../components'


import { FormField } from '../components'

const Login = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({
    email : '',
    password : ''
  })
  

  const handleFormFieldChange = (fieldName, e) => {
    setForm({...form, [fieldName] : e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const users = "http://localhost:1337/api/usernames"
    try{
      const response = await fetch(users, {
        method : "POST",
        headers: {
          "Content-Type" : "application/json",
        },

        body : JSON.stringify({data : form}),
      }) 

      const data = await response.json();
      console.log(data);

    }catch(error){
      console.log(error);
    
  } 

  }


  return (
    <div className=' bg-[#1c1c24] flex justify-center items-center flex-col  sm:p-10 p-4 h-[100vh]   '>
    {isLoading && 'Loader...'}
    <div className=' flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
      <Link to="/iddrisu">
      <HomeIcon className=' h-6 w-6 mr-14 text-white' />
      </Link>
      <h1 className=' font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white'>Login</h1>
    </div>  
    <form  onSubmit={handleSubmit} className='w-full mt-[65px]  flex-col gap-[30px] max-w-xl'>
      <div className=' mt-5  gap-[40px] flex-wrap '>

        <FormField 
        labelName="Email *"
        placeholder="iddsrisu@gmail.com"
        inputType="email"
        value={form.email}
        handleChange={(e) => handleFormFieldChange('email', e)}

        />
      </div>


        <div className='  gap-[40px] flex-wrap '>
        <FormField 
        labelName="Password *"
        placeholder="password"
        inputType="password"
        value={form.password}
        handleChange={(e) => handleFormFieldChange('password', e)}
        
        />
        <Link to="/register">
        <h2 className=' text-[#DD1A83] cursor-pointer font-bold justify-end flex'>Create Account</h2>
        </Link>
      </div>


      <div className=' flex justify-center items-center mt-[40px]'>
          <CustomButton 
            btnType="submit"
            title="Login"
            styles="bg-[#DD1A83]"
            
          />
      </div>
    </form>
    
  </div>
  )
}

export default Login