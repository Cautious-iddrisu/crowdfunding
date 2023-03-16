// import axios, { Axios } from 'axios'
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { money } from '../assets'
import { CustomButton, FormField} from '../components'
import { checkIfImage } from '../utils'
import { HomeIcon } from '@heroicons/react/24/solid'

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [campaign, setCampaign] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [form, setForm] = useState({
    name: '',
    title: '', 
    description: '',
    target: '', 
    deadline: '',
    image: '',
  })

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName] : e.target.value});
    // setForm({file : e.target.files[0]});
  }

  const  handleSubmit  = async (e) => {
    e.preventDefault();

    // FIRST APPROACH



    // axios.post("http://localhost:1337/api/campaigns", form, {
    //   headers: {
    //     'Content-Type' : 'application/json',
    //     'authorization' :" bearer ced876f5aff9aed58af44f7ad0108002b578e91c06a70351bd7cb3648234c4ddf77dbb56ded3deec531e7dff157c2e70e22c5b0634e29317abe1bd138485091f493158527abc2474ccd6c341668a6cdd09b24c91005980f478a9bdcf5637a450bac0a87881e77a81fa247c3fc76f78add65fd57d8400e9935707c37661d64be7 " 
    //   },
    //   body: JSON.stringify({data : form}),

    // })
    // .then(Response => {
    //   console.log(Response);
    // })
    // .catch(error =>{
    //   console.log(error);
    // })


    // SECOND APPROACH
    // const data = new FormData();
    // data.append("files", file)

    // const upload_res = await fetch({
    //   method : "POST",
    //   url : "http://localhost:1337/api/upload/" ,
    //   "Conten-Type" : "application/json",
    //   "data" : {
    //     "file" : "file"
    //   }

    // })
    // console.log(upload_res);
    
//     const campaign = "http://localhost:1337/api/campaigns"
// try{
//     const response = await fetch(campaign, {
//       method: "POST",
//       headers:{   
//         "Content-Type" : "application/json",
//       },
//       body: JSON.stringify({ data: form}),
//     })
//     const data = await response.json();
//     console.log(data);
// }catch(error){
//   console.log(error);
// }







  // THIRD APPROACH

// const CreateCampaign = async (form) => {
//   checkEnvVars();
  
  // const response = await fetch("http://localhost:1337/api/campaigns", {
  //     method: "POST",
  //     body: JSON.stringify({
  //     "data":{
  //         "name" : form.name,
  //         "campaign_title" : form.campaign_title,
  //         "story": form.story,
  //         "goal" : form.goal,
  //         "date" : form.date,
  //         "image" : form.image
  //     }
  //     }),
  //     headers: {
  //     "Authorization": "bearer ced876f5aff9aed58af44f7ad0108002b578e91c06a70351bd7cb3648234c4ddf77dbb56ded3deec531e7dff157c2e70e22c5b0634e29317abe1bd138485091f493158527abc2474ccd6c341668a6cdd09b24c91005980f478a9bdcf5637a450bac0a87881e77a81fa247c3fc76f78add65fd57d8400e9935707c37661d64be7",
  //     "Content-Type": "application/json"
  //     }
  // });




const file = new FormData();
file.append("files", selectedFile);

axios.post("http://localhost:1337/api/upload", file)
.then((response) => {
  const fileId = response.data[0].id
})
// console.log(fileId)
.catch((error) =>{
  console.log(error);
})


 
  

}


  // useEffect(() => {
  //   const fetchdata = async () => {
  //     try{
        
  //       const data = await axios.get("http://localhost:1337/api/create-campaigns",
  //        {
  //         headers: {
  //           Authorization: 'bearer 3809862388ec4005d5aa02410de5672d477def176c223211b2225991ad20d62a4ae2b02e3521e5fe63295e3b2a5dbc303a6bfeff325e03297bf694a3456f6405970e49b8a203e96cb68f0bddb76ad3af8b9679d73b6c4c8e63ac37dae82f1fd27b2a4d2016921796f835cb64ac6b6c6879bf7ffda2dfd1d31e6c796909e179f3'
  //         },
  //       })
  //       console.log(data);
  //     } catch(error){
  //       console.log(error);
  //     }
  //   };
  //   fetchdata();
  
  // }, [])
  

  return (
    
    <div className=' bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4  '>
      {isLoading && 'Loader...'}
      <div className=' flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
        <Link to="/iddrisu">
        <HomeIcon className=' h-6 w-6 mr-14 text-white' />
        </Link>
        <h1 className=' font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white'>Start a Campaign</h1>
      </div>  
      <form  onSubmit={handleSubmit} className='w-full mt-[65px] flex flex-col gap-[30px] max-w-3xl'>
        <div className=' flex gap-[40px] flex-wrap '>
          <FormField 
          labelName="Your Name *"
          placeholder="Iddrisu"
          inputType="text"
          value={form.name}
          handleChange={(e) => handleFormFieldChange('name', e)}
          />
          <FormField 
          labelName="Campaign Title *"
          placeholder="Write a title"
          inputType="text"
          value={form.title}
          handleChange={(e) => handleFormFieldChange('title', e)}

          />
        </div>

        <FormField 
          labelName="Story *"
          placeholder="Write a story"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange('description', e)}

          />

          <div className=' w-full flex justify-start items-center p-4 bg-[#DD1A83] h-[120px] rounded-[10px]'>
            <img src={money} alt="money" className=' w-[40px] h-[40px] origin-center' />
            <h4 className=' font-epilogue font-bold text-[25px] text-white ml-[20px]'>You will get 100% of the raised amount</h4>
          </div>

          <div className=' flex gap-[40px] flex-wrap '>
          <FormField 
          labelName="Goal *"
          placeholder="0.50"
          inputType="text"
          value={form.target}
          handleChange={(e) => handleFormFieldChange('target', e)}
          
          />

          <FormField 
          labelName="End Date *"
          placeholder="End Date"
          inputType="date"
          value={form.deadline}
          handleChange={(e) => handleFormFieldChange('deadline', e)}

          />

          <FormField 
          labelName="Campaign image *"
          placeholder="Place image Url of your campaign"
          inputType="file"
          value={form.image}
          handleChange={(e) => handleFormFieldChange('image', e)}

          />
        </div>


        <div className=' flex justify-center items-center mt-[40px]'>
            <CustomButton 
              btnType="submit"
              title="Submit new campaign"
              styles="bg-[#DD1A83]"
              navigate="/iddrisu"
            />
        </div>
      </form>
      
    </div>
  )
}

export default CreateCampaign