import { Star } from 'lucide-react'
import React from 'react'
import ContactForm from './childComponents/ContactForm'
import ContactDetail from './childComponents/ContactDetail'

function ContactPage() {
    return (
        <section id='contact' className='flex flex-col mb-16'>
            <div className='flex flex-col gap-8 justify-center items-center text-center mt-28 px-6'>
                <div className='flex items-center justify-center gap-1.5 py-2.5 my-1 px-5 text-white bg-gradient-to-r from-purple-500 to bg-pink-500 rounded-full font-medium'>
                    <Star size={19} />
                    <p>Let's Connect</p>
                </div>
                <h2 className='sm:text-6xl text-5xl font-bold leading-12 text-slate-950'>Start a <span className='bg-gradient-to-r from-purple-500 to bg-pink-500 bg-clip-text text-transparent'>Conversation</span></h2>
                <p className='text-xl leading-9 text-slate-600 md:mx-92'>Ready to bring your next project to life? Let's discuss how we can work together to create something amazing.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-16   my-24 mx-6 sm:mx-10'>
                <ContactForm/>
                <ContactDetail/>
            </div>
        </section>
    )
}

export default ContactPage