import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

export default function Store() {
  return (
    <>
    <Navbar/>
    <section className="mt-32 pt-32 mb-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-4/12 text-center">
            <h2 className="text-3xl font-semibold mb-6">Maaf Belum Punya Toko</h2>
            <p className="text-lg mb-12">
              Doakan Segera Buka 12 Cabang Sekaligus
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
