import React from 'react'

function ProjectCard() {
    return (
        <div className='flex flex-col p-6 gap-4 bg-white shadow-lg rounded-2xl'>
            <div className='bg-gradient-to-r from-sky-500 to-purple-500 w-full h-48 rounded-xl'>

            </div>
            <p className='px-4 py-0.5 text-[0.83rem] font-medium text-slate-800 rounded-full bg-slate-300 w-fit'>Web Development</p>
            <div className='flex flex-col gap-5'>
                <p className='text-lg font-semibold text-slate-700'>Real-Time Chat Application</p>
                <p className='text-slate-600 text-[0.91rem]'>Scalable chat application with real-time messaging, file sharing, and video calls. Built with WebSocket technology and microservices architecture.</p>
                <div></div>
            </div>
            <div className='w-full flex text-[0.8rem] gap-2 font-medium text-slate-700'>
                <p className='py-0.5 px-3 rounded-lg bg-slate-200'>React</p>
                <p className='py-0.5 px-3 rounded-lg bg-slate-200'>Node.js</p>
                <p className='py-0.5 px-3 rounded-lg bg-slate-200'>Socket.io</p>
                <p className='py-0.5 px-3 rounded-lg bg-slate-200'>MongoDB</p>
            </div>
            <div className='flex gap-5 mt-1'>
                <button className='w-full px-6 py-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-purple-700 text-white border border-slate-300 hover:text-black font-medium hover:bg-slate-100'>Live Demo</button>
                <button className='w-full px-6 py-1.5 rounded-xl hover:bg-gradient-to-r from-sky-500 to-purple-700 text-black border border-slate-300 hover:text-black font-medium hover:bg-slate-100'>Code</button>
            </div>
        </div>
    )
}

export default ProjectCard