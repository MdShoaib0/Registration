import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { LuPhoneCall } from 'react-icons/lu'
import { MdOutlineMail } from 'react-icons/md'

function ContactDetail() {
    const contactDetails = [
        {
            icon: <MdOutlineMail />,
            bg: 'bg-gradient-to-r from-sky-600 to-blue-600',
            label: 'Email',
            value: 'muhammedshoaib06@gmail.com',
            href: 'mailto:muhammedshoaib06@gmail.com',
            ariaLabel: 'Email'
        },
        {
            icon: <LuPhoneCall />,
            bg: 'bg-gradient-to-r from-green-400 to-green-500',
            label: 'Phone',
            value: '+91 9199963035',
            href: 'tel:+919199963035',
            ariaLabel: 'Phone'
        },
        {
            icon: <IoLocationOutline />,
            bg: 'bg-gradient-to-r from-purple-500 to-rose-500',
            label: 'Location',
            value: 'Gopal Ganj, Bihar(India)',
            href: 'https://maps.google.com/?q=Gopal+Ganj+Bihar',
            ariaLabel: 'Location'
        }
    ]

    return (
        <div className='flex flex-col gap-8'>
            <p className='text-3xl font-bold'>Let's Work Together</p>
            <p className='text-slate-600 text-lg'>I'm always excited about new opportunities and interesting projects. Whether you have a specific idea in mind or need guidance on your next digital venture, I'd love to hear from you.</p>
            <div className='flex flex-col justify-center items-start gap-8'>
                {contactDetails.map((detail, index) => (
                    <div key={index} className='flex justify-start items-center gap-6'>
                        <div className={`${detail.bg} w-16 h-16 flex justify-center items-center rounded-2xl shadow-lg`} aria-label={detail.ariaLabel}>
                            {React.cloneElement(detail.icon, { color: 'white', size: 30 })}
                        </div>
                        <div className='flex flex-col justify-center items-start'>
                            <p className='text-gray-600 font-medium'>{detail.label}</p>
                            <a href={detail.href} className='text-lg font-medium hover:underline'>
                                {detail.value}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContactDetail