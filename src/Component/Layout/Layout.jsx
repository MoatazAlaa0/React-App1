import React from 'react'
import Navbar from './../Navbar/Navbar';
import Error from './../Error/Error';
import Footer from './../Footer/Footer';
import Home from './../Home/Home';
import About from './../About/About';
import { Outlet } from 'react-router-dom';
import Portfolio from './../Portfolio/Portfolio';

export default function Layout() {
  return (
    <>
    <Navbar/>
    <div>
      <Outlet/>
    </div>
 
<Footer/>

    
    </>
  )
}
