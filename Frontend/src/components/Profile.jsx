import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'

const Profile = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'></div>
      <Footer></Footer>
    </div>
  )
}

export default Profile
