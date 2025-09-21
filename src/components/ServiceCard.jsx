import React from 'react'
import { HiOutlineCodeBracket } from 'react-icons/hi2'
import { LuArrowRight } from 'react-icons/lu'

function ServiceCard() {
    return (
        <div className='flex flex-col w-full bg-white items-center p-8 gap-8 shadow-lg rounded-2xl'>
            <p className='w-[73px] h-[73px] flex justify-center items-center rounded-3xl shadow bg-gradient-to-r from-blue-500 to bg-purple-500'><HiOutlineCodeBracket color='white' size={28}/></p>
            <p className='text-3xl font-bold text-center'>Full-Stack Development</p>
            <p className='text-center font-medium text-gray-500'>End-to-end web applications built with modern technologies and best practices for scalability and performance.</p>
            <div className='flex w-full flex-col items-start gap-4'>
                <p className='font-semibold text-gray-500 flex justify-center items-center gap-4'><span className='w-2 h-2 inline-block text-blue-500 rounded-full bg-gradient-to-r from-blue-500 to-purple-500'></span>Custom Web Applications</p>
                <p className='font-semibold text-gray-500 flex justify-center items-center gap-4'><span className='w-2 h-2 inline-block text-blue-500 rounded-full bg-gradient-to-r from-blue-500 to-purple-500'></span>E-commerce Platforms</p>
                <p className='font-semibold text-gray-500 flex justify-center items-center gap-4'><span className='w-2 h-2 inline-block text-blue-500 rounded-full bg-gradient-to-r from-blue-500 to-purple-500'></span>API Development</p>
                <p className='font-semibold text-gray-500 flex justify-center items-center gap-4'><span className='w-2 h-2 inline-block text-blue-500 rounded-full bg-gradient-to-r from-blue-500 to-purple-500'></span>Database Architecture</p>
            </div>
            <button className='w-full py-2 flex justify-center items-center gap-4 border border-gray-300 rounded-2xl'>Learn More <span><LuArrowRight />
            </span></button>
        </div>
    )
}

export default ServiceCard