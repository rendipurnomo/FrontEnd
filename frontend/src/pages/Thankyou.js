import { Breadcrumbs } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Ilustration from '../asset/images/delivery.jpg'
import Footer from '../parts/Footer'

export default function Thankyou() {
  return (
    <>
    <Breadcrumbs className='pt-16 bg-blue-200'>
    <Link to="/" className="opacity-60 text-xl">
        Home
      </Link>
      <Link to="/thankyou" className="opacity-60 text-xl">
        Success Checkout
      </Link>
    </Breadcrumbs>
    <section className="mt-16 pt-16">
      <div className="container mx-auto min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-4/12 text-center">
            <img
              src={Ilustration}
              alt="congrats illustration"
            />
            <h2 className="text-3xl font-semibold mb-6">Ah yes it’s success!</h2>
            <p className="text-lg mb-12">
              Furniture yang anda beli akan kami kirimkan saat ini juga so now
              please sit tight and be ready for it
            </p>
            <Link
              to="/"
              className="text-white bg-blue-600 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}
