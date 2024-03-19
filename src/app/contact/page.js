"use client";

import React, { useState } from 'react'
import '../../app/globals.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    city:'',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Form is valid, you can submit it here or perform any action
      console.log('Form submitted:', formData);
    } else {
      setErrors(errors);
    }
  };

  const validateForm = (formData) => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.contact.trim()) {
      errors.contact = 'Contact is required';
    }
    // if (!formData.message.trim()) {
    //   errors.message = 'Message is required';
    // }
    return errors;
  };


  return (
    <div className='contact-page'>
        <div className='px-4 md:px-28 flex flex-col lg:flex-row w-full pt-2 md:pt-10'>
          <div className='w-full lg:w-1/2 pr-20'>
            <div className='orange-title-font'>We’d love to hear from you</div>
            <div className='py-2'>To reach to us, you can fill the form here, drop email or contact us on provided number</div>
            <div className='text-lg font-bold pb-1 text-secondary-500'>info@thedesignhabitat.com </div>
            <div className='w-full flex flex-col md:flex-row font-medium pt-4'>
              <div className='w-full md:w-1/2 pr-4'>
                <div className='text-lg font-bold pb-1'>Pune</div>
                <div className='py-1'>6120/6130 6th floor Marvel Fuego, Magarpatta road, opposite to Seasons Mall, Hadapsar, Pune 411028</div>
                <div className='py-1'>+91 788 803 3033</div>
              </div>
              <div className='w-full md:w-1/2 pr-4'>
                <div className='text-lg font-bold pb-1'>Nashik</div>
                <div className='py-1'>4th floor, Babubhai House, Above HDFC Bank, Near Kulkarni Garden, Sharanpur Road, Nashik - 422002</div>
                <div className='md:py-1 '>+91 776 803 3033</div>
              </div>
            </div>
            <div></div>
          </div>
          <div className='w-full lg:w-1/2'>
            <div className="px-5 py-8 md:py-4">
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name</label>
                <input
                  className="block w-full textarea text-sm pb-10"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span>{errors.name}</span>}
              </div>
              <div>
                <label>Email</label>
                <input
                  className="block w-full textarea text-sm pb-10"
                  placeholder="Enter email address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}
              </div>
              <div>
                <label>Contact</label>
                <input
                  className="block w-full textarea text-sm"
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter contact number"
                />
                {errors.contact && <span>{errors.contact}</span>}
              </div>
              <div>
                <label>City</label>
                <input
                  className="block w-full textarea text-sm"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                />
                {errors.city && <span>{errors.city}</span>}
              </div>
              <div>
                <label>Message</label>
                <textarea
                  className="block w-full textarea text-sm"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                ></textarea>
                {errors.message && <span>{errors.message}</span>}
              </div>
              <button type="submit" className='buttonCSS'>Submit</button>
            </form>
              {/* <form>
              <div className=''>
                <label for="name">Name</label>
                <input
                className="block w-full textarea text-sm pb-10"
                type="text"
                name="name"
                placeholder="Enter your name"
                />
              </div>
              <div>
                <label for="email">Email</label>
                <input
                className="block w-full textarea text-sm"
                type="text"
                name="email"
                placeholder="Enter email address"
                />
                <span className="text-red-700 font-base text-xs mt-4"></span>
              </div>
              <div>
                <label for="contact">Contact</label>
                <input
                className="block w-full textarea text-sm"
                type="text"
                name="contact"
                placeholder="Enter contact number"
                />
                <span className="text-red-700 font-base text-xs mt-4"></span> 
              </div>
              <div>
                <label for="message">Message</label>
                <textarea 
                className="block w-full textarea text-sm" 
                name="postContent" 
                rows={4} cols={40} />
                <span className="text-red-700 font-base text-xs mt-4"></span> 
              </div>
              <div>
              <button type="submit" className='buttonCSS'>Submit</button>
              </div>
            </form> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact