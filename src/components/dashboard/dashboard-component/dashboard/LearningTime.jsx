import React from 'react'

const LearningTime = () => {
    return <>
        <div class="bg-gray-50  bg-gradient-to-r from-white to-gray-50 text-transparent w-[70%] sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/5 h-[280px]   md:h-[300px] p-6 rounded-2xl shadow-lg items-center mt-10 flex flex-col justify-center space-y-4">
            <div>
                <h3 class="text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-yellow-500 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Learning Time</h3>
            </div>

            <div class="bg-white border-8 border-gray-300 rounded-full h-3/5 w-3/5 sm:h-full  sm:w-[90%] flex items-center justify-center">
                <div class="font-semibold text-lg sm:text-lg md:text-[15px] lg:text-xl xl:text-xl text-gray-700">
                    02<span class="text-base sm:text-lg md:text-[14px] lg:text-base xl:text-base">hrs</span>:
                    30<span class="text-base sm:text-lg md:text-[14px] lg:text-base xl:text-base">min</span>
                </div>
            </div>
        </div>








    </>
}

export default LearningTime
