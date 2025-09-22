import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { MdOutlineMail } from 'react-icons/md'
import { LuLinkedin } from 'react-icons/lu'

function Footer() {
  const socialLinks = [
    {
      icon: <FiGithub color='white' size={25} />,
      href: "https://github.com/yourusername",
      label: "GitHub"
    },
    {
      icon: <LuLinkedin color='white' size={25} />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn"
    },
    {
      icon: <MdOutlineMail color='white' size={25} />,
      href: "mailto:muhammedshoaib06@gmail.com",
      label: "Email"
    }
  ]

  return (
    <footer id='' className='w-full flex flex-col py-20 justify-center items-center bg-gradient-to-r gap-8 from-blue-950 to-blue-900'>
        <p className='text-3xl font-bold text-white'>DevPortfolio</p>
        <p className='text-sm font-medium text-gray-50'>Crafting exceptional digital experiences with passion and precision</p>
        <div className='flex gap-6'>
            {socialLinks.map((link, index) => (
                <a 
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-12 h-12 rounded-2xl shadow-lg flex justify-center items-center bg-blue-800 hover:bg-blue-700 transition-colors'
                    aria-label={link.label}
                >
                    {link.icon}
                </a>
            ))}
        </div>
        <p className='text-sm font-medium text-gray-200'>© 2024 DevPortfolio. Designed & Developed with ❤️</p>
    </footer>
  )
}

export default Footer