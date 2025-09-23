import React, { useState } from 'react';
import { LuSend } from 'react-icons/lu';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real application, you would send the data to your backend here
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      className='w-full h-auto flex flex-col gap-6 bg-white p-6 md:p-9 rounded-xl shadow-lg'
      onSubmit={handleSubmit}
      noValidate
    >
      <p className='text-2xl font-bold text-gray-800'>Send a Message</p>
      
      <div className='flex flex-col md:flex-row gap-4'>
        <div className='w-full'>
          <label htmlFor="name" className="sr-only">Your Name</label>
          <input 
            id="name"
            name="name"
            className='w-full py-3 shadow rounded-lg bg-slate-100 outline-none px-3 focus:ring-2 focus:ring-blue-500 transition-all'
            type="text" 
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-red-500 text-sm mt-1 ml-1">
              {errors.name}
            </p>
          )}
        </div>
        
        <div className='w-full'>
          <label htmlFor="email" className="sr-only">Your Email</label>
          <input 
            id="email"
            name="email"
            className='w-full py-3 shadow rounded-lg bg-slate-100 outline-none px-3 focus:ring-2 focus:ring-blue-500 transition-all'
            type="email" 
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-red-500 text-sm mt-1 ml-1">
              {errors.email}
            </p>
          )}
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="sr-only">Subject</label>
        <input 
          id="subject"
          name="subject"
          className='w-full py-3 shadow rounded-lg bg-slate-100 outline-none px-3 focus:ring-2 focus:ring-blue-500 transition-all'
          type="text" 
          placeholder='Subject'
          value={formData.subject}
          onChange={handleChange}
          aria-invalid={errors.subject ? 'true' : 'false'}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className="text-red-500 text-sm mt-1 ml-1">
            {errors.subject}
          </p>
        )}
      </div>
      
      <div>
        <label htmlFor="message" className="sr-only">Your Message</label>
        <textarea 
          id="message"
          name="message"
          className='w-full h-32 shadow rounded-lg bg-slate-100 outline-none p-3 focus:ring-2 focus:ring-blue-500 transition-all'
          placeholder='Your Message'
          value={formData.message}
          onChange={handleChange}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        ></textarea>
        {errors.message && (
          <p id="message-error" className="text-red-500 text-sm mt-1 ml-1">
            {errors.message}
          </p>
        )}
      </div>
      
      <button 
        className='w-full py-3 flex items-center gap-2 justify-center text-white bg-gradient-to-r rounded-lg shadow-lg from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed'
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            Sending...
          </>
        ) : (
          <>
            <LuSend size={17} className='relative top-[1px]'/>
            Send Message
          </>
        )}
      </button>
      
      {submitStatus === 'success' && (
        <div className="p-3 bg-green-100 text-green-700 rounded-lg">
          Message sent successfully!
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="p-3 bg-red-100 text-red-700 rounded-lg">
          There was an error sending your message. Please try again.
        </div>
      )}
    </form>
  );
}

export default ContactForm;