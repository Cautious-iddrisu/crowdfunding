import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/solid';
import { FormField } from '../components';
import { CustomButton } from '../components'


const Register = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        username: '',
        email : '',
        password : '',
        confirm : ''
    })

    const handleFormFieldChange = (fieldName,e) =>{
        setForm({...form,[fieldName] : e.value.target});
        console.log(form)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className=' bg-[#1c1c24] flex justify-center items-center flex-col  sm:p-10 p-4 h-[100vh]   '>
    {isLoading && 'Loader...'}
    <div className=' flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
      <Link to="/iddrisu">
      <HomeIcon className=' h-6 w-6 mr-14 text-white' />
      </Link>
      <h1 className=' font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white'>Register</h1>
    </div>  
    <form  onSubmit={handleSubmit} className='w-full mt-[65px]  flex-col gap-[30px] max-w-xl'>
      <div className=' mt-5  gap-[40px] flex-wrap '>
        <FormField 
        labelName="Your Username *"
        placeholder="Iddrisu"
        inputType="text"
        value={form.name}
        handleChange={(e) => handleFormFieldChange('name', e)}
        />
        <FormField 
        labelName="Email *"
        placeholder="iddrisu@gmail.com"
        inputType="email"
        value={form.title}
        handleChange={(e) => handleFormFieldChange('title', e)}

        />
      </div>


        <div className='  gap-[40px] flex-wrap '>
        <FormField 
        labelName="Password *"
        placeholder="password"
        inputType="password"
        value={form.target}
        handleChange={(e) => handleFormFieldChange('target', e)}
        
        />
        <Link to="/login">
        <h2 className=' text-[#DD1A83] cursor-pointer font-bold justify-end flex'>Already have Account</h2>
        </Link>
      </div>


      <div className=' flex justify-center items-center mt-[40px]'>
          <CustomButton 
            btnType="submit"
            title="Register"
            styles="bg-[#DD1A83]"
            
          />
      </div>
    </form>
    
  </div>
  )
}

export default Register