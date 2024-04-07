import React, { useState } from 'react'
import TransactionDetails from './TransactionDetails';

const HeroTranaction = () => {
    const info = [1, 2, 3, 4, 5, 6]
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return <>
        <div class="bg-gray-50 min-h-screen">
            <div class="container mx-auto px-4 py-8">
                <h1 class="text-4xl font-semibold text-yellow-500 text-center mb-8">Your Transaction</h1>
                {/* <!-- Grid for transitions --> */}
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {/* <!-- Sample Transition 1 --> */}
                    {
                        info && info.map(item => <div class="bg-gray-100 rounded-lg p-6 shadow-lg hover:shadow-xl">
                            <div class="flex items-center justify-between mb-4">
                                <h2 class="text-3xl font-semibold text-indigo-600 hover:text-indigo-800 transition duration-300">Course Name 1</h2>
                            </div>                     <p class="flex items-center text-gray-600 mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Purchase Date: September 15, 2023
                            </p>
                            <p class="flex items-center text-gray-600 mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                                Instructor: John Doe
                            </p>
                            <p class="flex items-center text-gray-600 mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Duration: 8 weeks
                            </p>
                            <p class="flex items-center text-gray-600 mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l-1-5 5-5 5 5-1 5"></path>
                                </svg>
                                Price: $99.99
                            </p>
                            <button type="button"
                                data-modal-target="defaultModal"
                                data-modal-toggle="defaultModal"
                                onClick={toggleModal}
                                class="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105">
                                View Details
                            </button>
                        </div>)
                    }

                </div>
            </div>
        </div>



        {/* modal window code of tranaction details */}

        {/* <!-- Main modal --> */}
        <div
            id="defaultModal"
            tabIndex="-1"
            aria-hidden={!isModalOpen}
            className={`fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 ${isModalOpen ? '' : 'hidden'} p-4 overflow-x-hidden overflow-y-auto`}
        >
            <div className="relative w-full max-w-2xl max-h-full flex flex-col items-center justify-center">
                {/* <!-- Modal content --> */}
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* <!-- Modal header --> */}
                    <div class="flex items-start justify-between p-4 px-10 pt-10 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl  font-semibold text-gray-900 dark:text-white">
                            Transaction Details
                        </h3>
                        <button type="button" onClick={toggleModal} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>



                    {/* <!-- Modal body --> */}
                    <TransactionDetails />

                </div>
            </div>
        </div>


    </>
}

export default HeroTranaction
