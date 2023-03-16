import React from 'react'

import {  CampaignDetails, CreateCampaign, Profile } from './'
import { Sidebar, Navbar } from '../components';
// import { Route, Routes } from 'react-router-dom';

const Dashboard = () => {
  return (
        <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className=' sm:flex hidden mr-10 relative'>
        <Sidebar/>
      </div>

      <div className=' flex-1 max-sm:w-full max-w-1280 mx-auto sm:pr-5'>
        <Navbar/>

        {/* <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/create-campaign" element={<CreateCampaign/>} />
          <Route path="/campaign-details/:id" element={<CampaignDetails/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes> */}
      </div>
    </div>
  )
}

export default Dashboard