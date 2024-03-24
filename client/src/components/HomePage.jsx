import React from 'react'
import Camera from './Camera'
import Navbar from "./Navbar"
import Footer from './Footer'

const HomePage = () => {
  return (
    <div className='flex flex-col'>
      <Navbar/>
        <Camera/>
      <Footer/>
    </div>
  )
}

export default HomePage
