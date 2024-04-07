import React, { useEffect, useState } from 'react'
import { PiBookBookmarkBold, PiChalkboardTeacherDuotone, PiStudentDuotone } from "react-icons/pi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { AiTwotoneSetting } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const closeSidebar = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(true); // Show sidebar for lg and xl screens
            } else {
                setIsOpen(false); // Hide sidebar for sm, md, and smaller lg screens
            }
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initialize the sidebar state based on the window width
        handleResize();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const buttonVisibilityClass = window.innerWidth < 1024 ? 'block' : 'hidden';
    const sidebarVisibilityClass = isOpen ? 'translate-x-0' : '-translate-x-full';

    return <>

        {/* menu button appear in sm or md size */}
        <button
            type="button"
            className={`inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-900 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ${buttonVisibilityClass}`}
            onClick={toggleSidebar}
        >
            <span className="sr-only">Open sidebar</span>
            <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
            </svg>
        </button>



        {/* side bar code */}
        <aside
            id="logo-sidebar"
            className={`fixed left-0 top-0 shadow-xl shadow-gray-300 z-40 w-64 h-screen transition-transform ${sidebarVisibilityClass}`}
            aria-label="Sidebar"
        >
            {/* Sidebar content */}
            <div className="h-full px-3 py-4 overflow-y-auto shadow-inner shadow-gray-300 bg-gray-50">
                {/* Logo and close button */}
                <div className="flex items-center">
                    <a href="" className="flex items-center pl-2.5 mb-5">
                        <span className="self-center text-xl font-semibold whitespace-nowrap">LOGO</span>
                    </a>
                    <button
                        type="button"
                        className="font-extrabold pr-7 text-gray-500 text-lg absolute top-4 lg:hidden right-3 hover:text-gray-700 focus:outline-none"
                        onClick={closeSidebar}
                    >
                        X
                    </button>
                </div>

                {/* Links to different pages */}
                <ul className="space-y-4 font-medium mt-10">
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                            <MdDashboard className='flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20' />
                            <span className="ml-3">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">


                            <PiChalkboardTeacherDuotone className='flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20' />

                            <span className="flex-1 ml-3 whitespace-nowrap">Courses</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">

                            <PiStudentDuotone className='flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20' />
                            <span className="flex-1 ml-3 whitespace-nowrap">Student</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                            <FaMoneyBillTransfer className='flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20' />


                            <span className="flex-1 ml-3 whitespace-nowrap">Tranactions</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">

                            <PiBookBookmarkBold className='flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20' />

                            <span className="flex-1 ml-3 whitespace-nowrap">Schedule</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                            <HiOutlineStatusOnline className='flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20' />

                            <span className="flex-1 ml-3 whitespace-nowrap">Live Class</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                            <AiTwotoneSetting className='flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20' />
                            <span className="flex-1 ml-3 whitespace-nowrap">Setting</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>





    </>
}

export default SideBar
