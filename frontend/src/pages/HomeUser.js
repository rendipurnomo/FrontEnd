import React from 'react'
import Navbar from '../parts/Navbar'
import Hero from '../parts/homePages/Hero'
import BrowesRoom from '../parts/homePages/BrowesRoom'
import NewArrival from '../parts/homePages/NewArrival'
import Testimoni from '../parts/homePages/Testimoni'
import ShippingDelivery from '../parts/ShippingDelivery'
import Footer from '../parts/Footer'

import UseSrollAnchor from '../hooks/UseSrollAnchor'
import NavbarUser from '../parts/NavbarUser'




export default function HomeUser() {

  UseSrollAnchor();
  
  return (
    <>
        <NavbarUser/>
        <Hero/>
        <BrowesRoom/>
        <NewArrival/>
        <Testimoni/>
        <ShippingDelivery/>
        <Footer/>
    </>
  )
}
