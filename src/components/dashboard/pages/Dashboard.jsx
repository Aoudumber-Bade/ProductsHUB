import React from 'react'
import Hero from '../dashboard-component/dashboard/Hero'
import LearningTime from '../dashboard-component/dashboard/LearningTime'
import Updates from '../dashboard-component/dashboard/Updates'
import BadegesShowCase from '../dashboard-component/dashboard/BadegesShowCase'


const Dashboard = () => {
    return (
        <div className='mx-7 lg:ml-72  '>
            <Hero />
            <div className='flex flex-col justify-between items-center sm:flex-row'>
                <LearningTime />
                <BadegesShowCase />
            </div>
            <Updates />
        </div>
    )
}

export default Dashboard
