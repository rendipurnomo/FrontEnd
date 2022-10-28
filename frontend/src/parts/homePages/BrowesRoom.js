import React from 'react'
import { Link } from 'react-router-dom'

export default function BrowesRoom() {
  return (
    <section className="relative bg-gray-100 overflow-hidden" id="categories">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-8 lg:pt-16 lg:pb-16">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <h3 className="text-3xl capitalize font-bold pb-16">
            Shop categories <br className="" />Your Style
          </h3>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="grid grid-rows-2 grid-cols-9 gap-4">
          <div className="relative col-span-6 row-span-1 md:col-span-4 card">
            <div className="card-shadow rounded-xl">
            <Link to='/clothing'>
                <img src="./images/clothing.jpeg" alt="clothing" className="w-full h-full object-cover object-center overlay overflow-hidden rounded-xl"/>
            </Link>
            <div className="text-center">
              <h5 className="text-lg font-semibold">Clothing</h5>
              <span className="">18.309 items</span>
            </div>
            </div>
          </div>
          <div className="relative col-span-9 row-span-1 md:col-span-2 md:row-span-2 card">
            <div className="card-shadow rounded-xl">
            <Link to='/pants'>
                <img src="./images/pants.jpeg" alt="pants" className="w-auto h-50% object-cover object-center overlay overflow-hidden rounded-xl"/>
            </Link>
                
            </div>
            <div className="text-center">
              <h5 className="text-lg font-semibold">Pants</h5>
              <span className="">77.392 items</span>
            </div>
            <a href="details.html" className="stretched-link">
            </a>
          </div>
          <div className="relative col-span-9 row-span-1 md:col-span-3 md:row-span-2 card mx-auto">
            <div className="card-shadow rounded-xl">
            <Link to='/jacket'>
                <img src="./images/jacket.jpeg" alt="jacket" className="w-auto h-50% object-cover object-center overlay overflow-hidden rounded-xl"/>
            </Link>
            </div>
            <div
              className="text-center">
              <h5 className="text-lg font-semibold">Jacket</h5>
              <span className="">22.094 items</span>
            </div>
            <a href="details.html" className="stretched-link">
            </a>
          </div>
          <div className="relative col-span-9 row-span-1 md:col-span-4 card">
            <div className="card-shadow rounded-xl">
            <Link to='/brand'>
                <img src="./images/brand.jpeg" alt="brand" className="w-full h-full object-cover object-center overlay overflow-hidden rounded-xl"/>
            </Link>
            </div>
            <div className="text-center">
              <h5 className="text-lg font-semibold">Brands</h5>
              <span className="">837 items</span>
            </div>
            <a href="details.html" className="stretched-link">
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
