import React from 'react'
import Person from "../../asset/images/person.png"

export default function Hero() {
  return (
    <>
    {/* Decorative image */}
    <div className=''>
    <img src={Person} alt="person" className="absolute lg:bottom-16 right-72 z-10 "
    style={{ height:500}}/>
    </div>
    
    <div className="relative overflow-hidden bg-white min-h-screen">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Summer styles are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
              if you live or die.
            </p>
          </div>
          <div>
            <div className="mt-10">
              <a
                href="#categories"
                className="inline-block rounded-md border border-transparent bg-blue-600 py-3 px-8 text-center font-medium text-white hover:bg-blue-700"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}
