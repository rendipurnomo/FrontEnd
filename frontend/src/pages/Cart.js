import React from 'react'
import { Breadcrumbs } from '@material-tailwind/react'
import ShoppingCart from '../parts/cart/ShoppingCart'
import Footer from '../parts/Footer'
import { Link } from 'react-router-dom'

export default function Cart() {
  return (
    <>
    <Breadcrumbs className='pt-16 bg-blue-200'>
    <Link to="/" className="opacity- 60 text-xl">
        Home
      </Link>
      <Link to="/cart" className="opacity- 60 text-xl">
        Cart
      </Link>
    </Breadcrumbs>
    <ShoppingCart/>
    <Footer/>
    </>
  )
}
