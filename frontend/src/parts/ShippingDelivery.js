import React from 'react'
import Delivery from '../asset/images/delivery.jpg'

export default function ShippingDelivery() {
  return (
    <section className="container mx-auto py-16 mt-16 mb-16">
    <img src={Delivery} alt='delivery shipping' className='hover:animate-bounce  w-96 mx-auto'/>
    </section>
  )
}
