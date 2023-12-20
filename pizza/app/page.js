"use client"
import React from 'react'
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./Components/Navbar"
import Mainimg from './Components/Mainimg';
import Showcase from './Components/Showcase';
import Footer from './Components/Footer';


const page = () => {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
  return (
    <>
    <Navbar/>
    <Mainimg/>
    <Showcase/>
    <Footer/>
    </>
    
  )
}

export default page
