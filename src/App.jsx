import React from 'react';
import { Routes, Route, createBrowserRouter,RouterProvider } from 'react-router-dom';

import {  CampaignDetails, CreateCampaign, Profile, Dashboard } from './pages'
import { Sidebar, Navbar } from './components';
// import Home from './pages/Home'
import Home from './components/Home/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Home />
  },
  {
    path: '/iddrisu', 
    element: <Dashboard />
  },
  {
    path: '/create-campaign', 
    element: <CreateCampaign />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])

const App = () => {
  return (
    // <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
    //   <div className=' sm:flex hidden mr-10 relative'>
    //     <Sidebar/>
    //   </div>

    //   <div className=' flex-1 max-sm:w-full max-w-1280 mx-auto sm:pr-5'>
    //     <Navbar/>

    //     <Routes>
    //       <Route path="/" element={<Dashboard/>} />
    //       <Route path="/create-campaign" element={<CreateCampaign/>} />
    //       <Route path="/campaign-details/:id" element={<CampaignDetails/>} />
    //       <Route path="/profile" element={<Profile/>} />
    //     </Routes>
    //   </div>
    // </div>
    <div>
      <RouterProvider router={router}/>

    </div>
  )
}

export default App