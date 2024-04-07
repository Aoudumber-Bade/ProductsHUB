import React from 'react'

const Hero = () => {
    return <>
        <div className='  pt-5 box-border'>
            {/* main div */}
            <div className='   rounded-3xl py-5 items-center bg-gray-50 bg-gradient-to-r from-gray-50 to-gray-100 text-transparent shadow-xl flex justify-center space-x-12'>

                <div className=''>
                    <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" className='h-40 w-40 rounded-full cursor-pointer' />
                </div>
                {/* user details */}
                <div className=' space-y-6 w-2/5 text-black'>
                    <h2 className='font-bold text-3xl'>User Name</h2>
                    <p className='font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus doloremque inventore fuga praesentium.</p>
                </div>

                {/* user image */}
            </div>

        </div>


    </>
}

export default Hero
