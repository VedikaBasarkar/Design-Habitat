'use client';

import React, { useState } from 'react';
import '../../../app/globals.css'

const DesignDojo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    city:'',
    surname: '',
    org:'',
    dob:''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistry = (e) => {
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
    if (!formData.org.trim()) {
      errors.org = 'Contact is required';
    }
    return errors;
  };

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full flex flex-col px-6 lg:px-0'>
      <div className='w-full px-4 lg:px-28 z-0'> 
        <img className='h-vh rounded-b-mobBigBox lg:rounded-b-bigBox' src='https://design-habitat.nyc3.cdn.digitaloceanspaces.com/banners/Offline%20banner%202%20final.png' />
      </div>
      
      <div className='mt-10 hidden lg:block border border-y-4 border-r-4 border-dashed border-primary-300 rounded-r-mobBigBox shadow-lg pr-10 py-8 w-fit z-50 bg-white text-secondary-500 '>
        <div className='text-4xl font-mont font-bold pl-20 '>Design Dojo</div>
        <p className='pl-20 '>by <span className='text-xl'>An exhaustive fast track 1-year Design preparation program offered to learners <br />after completion of Grade 11.</span></p>
        <div className='flex flex-row mt-4 items-center h-fit justify-between'>
          <div className='flex'>
            <div className='bg-primary-500 rounded-r-md py-1 pl-20 pr-4 text-secondary-900 font-medium items-center'>Starts on: 1 May 2024</div>
            <div className='mx-4 font-medium text-lg items-center'>Duration: 1 Year</div>
          </div>
          <button className='buttonCSS' onClick={toggleModal}><div className='flex flex-row items-center'><div>Register</div> <img className='pl-2 h-4' src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/arrow.svg" /></div></button>
        </div>
      </div>

      {/* mobile title specialization */}
      <div className='
      mx-4 mt-4 block lg:hidden border-2 p-4 border-dashed border-primary-300 rounded-lg bg-white text-secondary-500'>
        <div className='text-2xl font-mont font-semibold text-center'>Advanced UX Design program</div>
        <p className='text-secondary-800 text-center py-2'>by <span className='text-xl '>Mr. Aditya, Thoughtspot</span></p>
        <p className='rounded-md px-6 font-medium text-center'>Starts on: 1 May 2024</p>
        <div className='text-center'>Duration: 1 Year</div>
      </div>
      
      <div className="mt-10 w-full">
        <div className='px-2 md:px-20 flex flex-col-reverse md:flex-row w-full'>
          <div className='w-full lg:w-2/3 pr-4 lg:pr-10'>
          <div className='text-xl font-medium font-mont pt-10 lg:pt-0 md:pb-1'>Description</div>
            <div>The Design Habitat is established as centre for Design experience. It is a brainchild of professionals with vast experience in the field of Design and innovation. The core team of The Design Habitat comes from educational and teaching backgrounds from institutes of repute such as IIT, NID and MITID.<br />
            At The Design Habitat, we're all about unleashing the creative potential within you. The institution is a hub of inspiration, where passion meets skill. With our expert faculty mentors from top institutes and cutting-edge curriculum, we're committed to equipping you with the knowledge and practical experience needed to excel in the dynamic world of design. Join us on this exciting and vibrant journey of exploration, growth, and endless possibilities to let your creativity soar!<br />
            The Design Habitat aims to become the foundation for all the aspirants with a passion to create a successful career in the Design industry.</div>

            <hr className='border-primary-500 border-t-2 my-6' />
            {/* Prerequisites */}
            <div>
            Learning at The Design Habitat lays a strong design foundation, ignites creativity, and equips aspirants with the skills and knowledge to navigate the dynamic world of design. <br />
            The curriculum delves deeper than just exam-specific skills. It encourages students to develop their creativity by providing design challenges and projects. This fosters problem-solving skills, a crucial asset for any successful designer. Techniques like brainstorming and mind mapping further strengthen their ability to think innovatively.<br />
            The curriculum recognizes the importance of well-rounded skills beyond design fundamentals. It helps students hone their communication skills through portfolio development and presentations. Time management, critical thinking, and research methodologies are also emphasized, building a strong foundation for success in design school and beyond.<br />
            The curriculum takes a holistic approach, focusing on five key pillars that integrate knowledge and skills at every level. 
            </div>

          <hr className='border-primary-500 border-t-2 my-6' />
          {/* Why design habitat */}
          <div className='text-xl font-medium font-mont md:pb-1'>Why The Design Habitat?</div>
          <div>
            • Mentors from NID, IIT, NIFT & MITID<br />
            • Only 20 students in a batch<br />
            • Learner centric mentoring, feedback & monitoring.<br />
            • Curriculum that not only helps for entrance exams but for the design career<br />
            • Experiential learning<br />
            • Best of Industry and academic experts as Mentors<br />
            • Specially curated Mock test as per the pattern<br />
            • Mentoring beyond entrance exams<br />
            • Outbound Activities<br />
            • Idea incubation

          </div>

          <hr className='border-primary-500 border-t-2 my-6' />
          </div>

          <div className='w-full lg:w-1/3'>
          <div className='bg-primary-50 flex flex-row rounded-mobBigBox w-full'>
            <div className='pl-10 border-dashed border-r-4 border-r-primary-300' />
            <div className='p-8'>
              <p className=''>Fees for this course</p>
              <div className='font-bold text-xl'>₹ 60,000 + GST</div>
              <p className='pt-4'>Start date</p>
              <div className='font-bold text-xl'>1st May 2024</div>
              <p className='pt-4'>Course Duration</p>
              <div className='font-bold text-xl'>1 Year</div>
              <p className='pt-4'>Mode of Course</p>
              <div className='font-bold text-xl'>Offline</div>
              <p className='pt-4'>Eligibility</p>
              <div className='font-bold text-xl'>Learners who have completed grade 10th pursuing 11th & 12th from any stream</div>
              <button className='buttonCSS pt-4'  onClick={toggleModal}><div className='flex flex-row items-center'><div>Register</div> <img className='pl-2 h-4' src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/arrow.svg" /></div></button>
            </div>
          </div>
          </div>
        </div>
      </div>


      
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className='flex flex-row justify-between w-full'>
              <div className='text-secondary-800 text-xl font-bold pb-2'>Register Here</div>
              <div>
                <button className="close-btn" onClick={ onClick={toggleModal}}>X</button>
              </div>
            </div>
            <div>
              <form className="grid grid-cols-1 md:grid-cols-2 lg:my-0 lg:gap-2" onSubmit={handleRegistry}>
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
                  <label>Surname</label>
                  <input
                    className="block w-full textarea text-sm pb-10"
                    type="text"
                    name="Surname"
                    placeholder="Enter your Surname"
                    value={formData.surname}
                    onChange={handleChange}
                  />
                  {errors.surname && <span>{errors.surname}</span>}
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
                  <label>Organization/College Name </label>
                  <input
                    className="block w-full textarea text-sm pb-10"
                    placeholder="Enter Organization/College Name"
                    type="text"
                    name="org"
                    value={formData.org}
                    onChange={handleChange}
                  />
                  {errors.org && <span>{errors.org}</span>}
                </div>
                <div>
                  <label>Date of Birth</label>
                  <input
                    className="block w-full textarea text-sm pb-10"
                    placeholder="Enter Date of Birth"
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                  {errors.dob && <span>{errors.dob}</span>}
                </div>
                <button type="submit" className='bg-secondary-500 text-white font-mont rounded-full py-4 w-40'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default DesignDojo;
