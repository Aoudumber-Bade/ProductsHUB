import React from 'react'

const BadegesShowCase = () => {
    return <>
        <div class="bg-gray-50 bg-gradient-to-r from-gray-50 to-gray-100 text-transparent mt-10 p-6 rounded-3xl w-[70%] shadow-lg hover:shadow-xl transition duration-300">
            <div class="text-center mb-8">
                <h2 class="text-2xl font-bold text-yellow-500 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Achieved Badges</h2>
            </div>

            {/* <!-- First achievement --> */}
            <div class="flex items-center mb-4">
                <img src="https://img.freepik.com/premium-vector/made-india-stamp-sticker-vector-logo-badge_526569-103.jpg?size=626&ext=jpg&ga=GA1.2.997146591.1675829529&semt=sph" alt="Badge Image" class="w-16 h-16 rounded-full border-4 border-white" />
                <div class="ml-4">
                    <h2 class="text-2xl font-semibold text-black">Task Name</h2>
                    <p class="text-gray-700 text-sm">Date of Completion: September 26, 2023</p>
                </div>
            </div>

            {/* <!-- Second achievement --> */}
            <div class="flex items-center mb-4">
                <img src="https://img.freepik.com/premium-vector/made-india-stamp-sticker-vector-logo-badge_526569-103.jpg?size=626&ext=jpg&ga=GA1.2.997146591.1675829529&semt=sph" alt="Badge Image" class="w-16 h-16 rounded-full border-4 border-white" />
                <div class="ml-4">
                    <h2 class="text-2xl font-semibold text-black">Task Name</h2>
                    <p class="text-gray-700 text-sm">Date of Completion: September 26, 2023</p>
                </div>
            </div>
        </div>




    </>

}

export default BadegesShowCase
