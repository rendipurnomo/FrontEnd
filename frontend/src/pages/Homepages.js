import React from 'react'
import Navbar from '../parts/Navbar'
import Hero from '../parts/homePages/Hero'
import BrowesRoom from '../parts/homePages/BrowesRoom'
import NewArrival from '../parts/homePages/NewArrival'
import Testimoni from '../parts/homePages/Testimoni'
import ShippingDelivery from '../parts/ShippingDelivery'
import Footer from '../parts/Footer'

import UseSrollAnchor from '../hooks/UseSrollAnchor'




export default function Homepages() {

  UseSrollAnchor();
  
  return (
    <>
        <Navbar/>
        <Hero/>
        <BrowesRoom/>
        <NewArrival/>
        <Testimoni/>
        <ShippingDelivery/>
        <Footer/>
    </>
  )
}
