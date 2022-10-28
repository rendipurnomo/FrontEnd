import React from 'react'
// import Navbar from '../parts/Navbar'
// import { Breadcrumbs } from "@material-tailwind/react";
// import Hero from '../parts/Hero'
// import BrowesRoom from '../parts/homePages/BrowesRoom'
// import NewArrival from '../parts/homePages/NewArrival'
// import ShippingDelivery from '../parts/ShippingDelivery'
import Footer from '../parts/Footer'
import Breadcrumb from '../component/Breadcrumb';
import Productdetails from '../details/Productdetails';
import Suggestion from '../details/Suggestion';






export default function Details(list) {
  return (
    <div>
        <Breadcrumb 
        list={[
          { url: "/", name: "Home"},
          { url: "/categories/8098", name: "Jacket"},
          { url: "/categories/90809/product/7889", name: "Details"}
        ]}/>
        <Productdetails/>
        <Suggestion/>
        <Footer/>
    </div>
  )
}
