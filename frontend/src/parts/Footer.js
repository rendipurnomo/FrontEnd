import React from 'react'

export default function Footer() {
  return (
    <div className=" bg-blue-700">
    <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
            <h3 className="text-3xl mb-3"> Download Rise Store app </h3>
            <p> Shopping . All day, every day. </p>
            <div className="flex justify-center my-10">
                <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" alt='hgshjghjb'/>
                    <div className="text-left ml-3">
                        <p className='text-lg text-gray-200'>Download on </p>
                        <p className="text-xl md:text-base"> Google Play Store </p>
                    </div>
                </div>
                <div className="flex items-center border rounded-lg px-4 py-2 w-auto mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" alt='ggggg'/>
                    <div className="text-left ml-3">
                        <p className='text-lg text-gray-200'>Download on </p>
                        <p className="text-xl md:text-base"> Apple Store </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mx-auto text-center text-xl text-gray-400">
                <span className="px-2">About us</span>
                <span className="px-2 border-l">Contact us</span>
                <span className="px-2 border-l">Privacy Policy</span>
            </div>
        <div className="mx-auto mt-20 text-center text-xl text-gray-400">
            <p> &copy; Rise Store, 2022. </p>
        </div>
    </div>
</div>
  )
}