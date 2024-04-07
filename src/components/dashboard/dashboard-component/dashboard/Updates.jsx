import React from 'react'

const Updates = () => {
    return <>
        <div class="container mx-auto p-6">
            <div class="overflow-x-auto">
                <table class="w-full bg-gradient-to-b from-gray-200 to-gray-400 rounded-2xl">
                    <thead>
                        <tr>
                            <th class="py-2 text-lg text-center text-white" colspan="4">
                                <span class='font-bold text-yellow-500 from-yellow-400 to-yellow-500'>
                                    Upcoming Lectures and Tasks
                                </span>
                            </th>
                        </tr>
                        <tr class="text-white font-medium">
                            <th class="px-4 py-2 text-center">Time</th>
                            <th class="px-4 py-2 text-center">Teacher</th>
                            <th class="px-4 py-2 text-center">Subject</th>
                            <th class="px-4 py-2 text-center">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-gray-100 hover:bg-gray-200">
                            <td class="px-4 py-2 text-center">09:00 AM</td>
                            <td class="px-4 py-2 text-center">John Doe</td>
                            <td class="px-4 py-2 text-center">Mathematics</td>
                            <td class="px-4 py-2 text-center">Lecture</td>
                        </tr>
                        <tr class="bg-gray-100 hover:bg-gray-200">
                            <td class="px-4 py-2 text-center">10:30 AM</td>
                            <td class="px-4 py-2 text-center">Jane Smith</td>
                            <td class="px-4 py-2 text-center">Science</td>
                            <td class="px-4 py-2 text-center">Task</td>
                        </tr>
                        {/* <!-- Add more rows for upcoming lectures and tasks --> */}
                    </tbody>
                </table>
            </div>
        </div>







    </>
}

export default Updates
