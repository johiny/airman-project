import React from 'react'
import { Outlet } from "react-router-dom"
import Announce from '../components/Announce';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
const MainLayout = () => {
  return (
    <div>
        <Announce/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout