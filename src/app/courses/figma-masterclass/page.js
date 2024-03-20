'use client';

import React, { useState } from 'react';
import '../../../app/globals.css'

const FigmaMasterclass = () => {
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

  const [courseObj, setCouraseObj] = useState(false);

  const handleObject = () => {
    setCouraseObj(!courseObj);
  };

  const [courseHighlight, setCouraseHighlight] = useState(false);

  const handleHighlight = () => {
    setCouraseHighlight(!courseHighlight);
  };

  const [courseOpp, setCouraseOpp] = useState(false);

  const handleOpportunity = () => {
    setCouraseOpp(!courseOpp);
  };


  const [courseRelevance, setCouraseRelevance] = useState(false);

  const handleRelevance = () => {
    setCouraseRelevance(!courseRelevance);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full flex flex-col px-6 lg:px-0'>
      <div className='w-full px-4 lg:px-20 rounded-mobBigBox lg:rounded-bigBox z-0'> 
        <img className='h-vh' src='https://design-habitat.nyc3.cdn.digitaloceanspaces.com/banners/Rectangle%20346.png' />
      </div>
      
      <div className='mt-10 hidden lg:block border border-y-4 border-r-4 border-dashed border-primary-300 rounded-r-mobBigBox shadow-lg pr-10 py-8 w-fit z-50 bg-white text-secondary-500 '>
        <div className='text-4xl font-mont font-bold pl-20 '>Figma Masterclass</div>
        <p className='pl-20 '>by <span className='text-xl'>Mr. Suraj Asawa, Nutanix</span></p>
        <div className='flex flex-row mt-4 items-center h-fit justify-between'>
          <div className='flex'>
            <div className='bg-primary-500 rounded-r-md py-1 pl-20 pr-4 text-secondary-900 font-medium items-center'>Starts on: 1 May 2024</div>
            <div className='mx-4 font-medium text-lg items-center'>Duration: 3 Months</div>
          </div>
          <button className='buttonCSS' onClick={toggleModal}><div className='flex flex-row items-center'><div>Register</div> <img className='pl-2 h-4' src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/arrow.svg" /></div></button>
        </div>
      </div>

      {/* mobile title specialization */}
      <div className='
      mx-4 mt-4 block lg:hidden border-2 p-4 border-dashed border-primary-300 rounded-lg bg-white text-secondary-500'>
        <div className='text-2xl font-mont font-semibold text-center'>Figma Masterclass</div>
        <p className='text-secondary-800 text-center py-2'>by <span className='text-xl '>Mr. Suraj Asawa, Nutanix</span></p>
        <p className='rounded-md px-6 font-medium text-center'>Starts on: 1 May 2024</p>
        <div className='text-center'>Duration: 3 Months</div>
      </div>
      
      <div className="mt-10 w-full">
        <div className='px-2 md:px-20 flex flex-col-reverse md:flex-row w-full'>
          <div className='w-full lg:w-2/3 pr-4 lg:pr-10'>
          <div className='text-xl font-medium font-mont pt-10 lg:pt-0 md:pb-1'>Description</div>
          <div>Embark on a transformative journey into the world of digital design with our Figma
          Masterclass, led by an industry expert. Figma has emerged as a leading collaborative interface
          design tool, revolutionizing the way design teams work together. This comprehensive course
          is designed to equip participants with the skills and knowledge needed to harness the full
          power of Figma and elevate their design proficiency to new heights</div>


          <hr className='border-primary-500 border-t-2 my-6' />
          {/* Prerequisites */}
          <div className='text-xl font-medium font-mont md:pb-1'>Prerequisites</div>
          <div>
            1. Basic understanding of design principles and terminology. <br />
            2. Familiarity with computer usage and internet browsing.<br />
            3. Access to a computer or laptop with a stable internet connection.<br />
            4. Ability to dedicate sufficient time for self-paced learning and completing assignments.<br />
            5. Eagerness to actively participate in discussions, ask questions, and engage with course materials.<br />
            6. Access to Figma software (a free account can be created on Figma's website)."
          </div>

          <hr className='border-primary-500 border-t-2 my-6' />
          {/* course structure */}
          <div className=''>
            <div className='flex flex-row justify-between'>
              <div className='text-xl font-mont font-medium items-center'>
                Course Structure
              </div>
            </div>
            <div className={`bg-white py-4`} id="course">
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 1: </span>Introduction to Figma</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 2: </span>Working with Shapes and Layers</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 3: </span>Text and Typography</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 4: </span>Color, Gradients, images and icons</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 5: </span>Layouts and Grids</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 6: </span>Components and Autolayouting</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 7: </span>Design Style Guide Creation</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 8: </span>Prototyping Basics</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 9: </span>Advanced Prototyping-I</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 10: </span>Advanced Prototyping-II</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 11: </span>Collaboration, plugin and integrations</div>
              <div className='font-semibold py-2 md:py-4 '><span className='font-normal pr-2'>Weeks 12: </span> Final Project and Portfolio Development</div>
            </div>
          </div>

          <hr className='border-primary-500 border-t-2 my-6' />

          {/* course objective */}
          <div className='my-6 cursor-pointer '>
            <div className='flex flex-row justify-between' onClick={handleObject} >
              <div className='text-xl font-bold md:pt-2 items-center'>
                Course Objective
              </div>

              <div className="font-bold text-4xl">
                {courseObj ? '-' : '+'}
              </div>
            </div>
            <div className={`bg-white ${courseObj ? 'expanded' : 'hidden'}  py-4`}>
              <ul className='font-normal'> 
                <li>1. Master Figma Tools and Interface: Gain a comprehensive understanding of Figma's
                    interface, tools, and features to efficiently navigate and utilize the platform for design
                    projects.</li>
                <li>2. Develop UI/UX Design Skills: Acquire fundamental UI/UX design principles and
                    techniques to create visually appealing and user-friendly digital interfaces.</li>
                <li>3. Enhance Collaboration Abilities: Learn how to collaborate effectively with team
                    members using Figma's real-time collaboration features, version control, and
                    commenting functionalities.</li>
                <li>4. Advance Prototyping and Animation Skills: Explore advanced prototyping and
                    animation techniques to create interactive and engaging user experiences within
                    Figma.</li>
                <li>5. Build Design Systems for Consistency: Develop skills in creating and implementing
                    design systems to ensure consistency and scalability across design projects.</li>
                <li>6. Strengthen Portfolio and Professional Skills: Complete hands-on projects and develop
                    a professional portfolio showcasing your proficiency in Figma and design capabilities,
                    ready to impress potential employers or clients.</li>
                <li>7. Prepare for Real-world Design Challenges: Engage in practical design challenges and
                    projects to apply learned concepts in real-world scenarios, receiving personalized
                    feedback and guidance from the instructor.</li>
                <li>8. Network and Career Advancement: Connect with industry professionals, receive
                    resume and interview preparation guidance, and position yourself for career
                    advancement opportunities in the design field</li>

              </ul>
            </div>
          </div>          

          <hr className='border-primary-500 border-t-2 my-6' />

          {/* Highlights of the course */}
          
          <div className='my-6 cursor-pointer '>
            <div className='flex flex-row justify-between' onClick={handleHighlight} >
              <div className='text-xl font-bold md:pt-2 items-center'>
              Highlights of the course
              </div>

              <div onClick={handleHighlight} className="font-bold text-4xl">
                {courseHighlight ? '-' : '+'}
              </div>
            </div>
            <div className={`bg-white ${courseHighlight ? 'expanded' : 'hidden'}  py-4`}>
              <ul className='font-normal'> 
                <li>1. Expert Guidance: Learn from an industry expert with extensive experience in digital
                    design and proficiency in Figma, receiving personalized instruction and feedback
                    throughout the course.</li>
                <li>2 .Comprehensive Curriculum: Dive deep into Figma's tools and features, covering
                    everything from the basics to advanced techniques in UI design and prototyping,
                    animation, and collaboration.</li>
                <li>3. Hands-on Projects: Apply learned concepts to real-world design projects and
                    challenges, gaining practical experience and building a professional portfolio to
                    showcase your skills to potential employers or clients.</li>
                <li>4. Interactive Learning: Engage in interactive lectures, group discussions, and peer
                    collaboration activities, fostering a dynamic learning environment and a supportive
                    community of fellow designers.</li>
                <li>5. Flexibility: Access course materials and participate in sessions remotely, allowing you
                    to balance your learning with other commitments and adapt the course to your
                    schedule.</li>
              </ul>
            </div>
          </div>

          <hr className='border-primary-500 border-t-2 my-6' />

          {/* Industry relevance of the course */}
          <div className='my-6 cursor-pointer '>
            <div className='flex flex-row justify-between' onClick={handleRelevance} >
              <div className='text-xl font-bold md:pt-2 items-center'>
              Industry relevance of the course

              </div>

              <div className="font-bold text-4xl">
                {courseRelevance ? '-' : '+'}
              </div>
            </div>
            <div className={`bg-white ${courseRelevance ? 'expanded' : 'hidden'}  py-4`}>
              <div>The industry relevance of the Figma Masterclass course lies in its focus on equipping
                    participants with essential skills and knowledge highly sought after in today's digital design
                    landscape. Here are some key points highlighting its industry relevance:</div>
              <div className='my-3'>
                  <b>Demand for Figma Proficiency:</b>
                  <p>Figma has become a widely adopted tool in the design
                      industry, with many companies preferring it for its collaborative features and ease of
                      use. By mastering Figma through this course, participants position themselves as
                      valuable assets in the job market, meeting the growing demand for professionals
                      proficient in this tool.</p>
              </div>
              <div className='my-3'>
                  <b>UI Design Expertise</b>
                  <p>With a focus on UI design principles and techniques, the course
                      addresses a critical need in the industry. Companies are increasingly prioritizing user-
                      centric design to enhance customer satisfaction and drive business success.
                      Participants emerge from the course with the skills to create intuitive, visually
                      appealing, and functional digital interfaces.</p>
              </div>
              <div className='my-3'>
                  <b>Collaborative Workflow</b>
                  <p>The course emphasizes collaborative design workflows
                      using Figma's real-time collaboration features. In today's distributed work
                      environment, where remote collaboration is commonplace, proficiency in
                      collaborative tools like Figma is invaluable for design teams to work seamlessly across
                      different locations and time zones.</p>
              </div>

              <div className='my-3'>
                  <b>Adaptability and Innovation</b>
                  <p> By exploring advanced prototyping, animation, and
                      design system creation within Figma, participants learn to adapt to evolving design
                      trends and push the boundaries of creativity. This adaptability and innovation are
                      highly valued in the industry, where staying ahead of the curve is essential for
                      competitive advantage</p>
              </div>

              <div className='my-3'>
                  <b>Career Advance Opportunities</b>
                  <p>Completing the Figma Masterclass enhances
                  participants' career prospects by providing them with a professional portfolio
                  showcasing their Figma skills and practical design experience. Whether seeking
                  employment opportunities or freelance projects, participants are better positioned to
                  secure roles in design-related fields and advance their careers.</p>
              </div>
              </div>
          </div>

          <hr className='border-primary-500 border-t-2 my-6' />

          {/* Opportunities of the course */}
          <div className='my-6 cursor-pointer '>
            <div className='flex flex-row justify-between' onClick={handleOpportunity} >
              <div className='text-xl font-bold md:pt-2 items-center'>
              Opportunities of the course
              </div>

              <div className="font-bold text-4xl">
                {courseOpp ? '-' : '+'}
              </div>
            </div>
            <div className={`bg-white ${courseOpp ? 'expanded' : 'hidden'}  py-4`}>
              <div>The Figma Masterclass course offers numerous opportunities for participants to enhance their
                    skills, advance their careers, and excel in the field of digital design. The opportunities provided
                    by the course are as follows:</div>
              <div className='my-3'>
                  <b>Skill Development</b>
                  <p>Participants have the opportunity to develop comprehensive skills
                  in Figma, including proficiency in its tools, interface, and features. They gain hands-on
                  experience in UI/UX design, prototyping, animation, and collaborative workflows,
                  equipping them with versatile skills applicable to a wide range of design projects.
                  </p>
              </div>
              <div className='my-3'>
                  <b>Portfolio Enhancement</b>
                  <p>Through hands-on projects and real-world design challenges,
                  participants build a professional portfolio showcasing their Figma proficiency and
                  design capabilities. This portfolio serves as a powerful tool for attracting potential
                  employers or clients and securing design-related opportunities.</p>
              </div>
              <div className='my-3'>
                  <b>Career Management</b>
                  <p>Completing the Figma Masterclass enhances participants'
                  career prospects in the design industry. They become more competitive candidates
                  for job roles such as UI/UX designers, graphic designers, web developers, and product
                  managers, among others. The course also provides resume and interview preparation
                  guidance to help participants succeed in job applications and interviews.</p>
              </div>

              <div className='my-3'>
                  <b>Networking Opportunities</b>
                  <p>Participants have the chance to network with industry
                  professionals, fellow designers, and peers during the course. Networking events,
                  group discussions, and collaborative projects facilitate connections within the design
                  community, opening doors to potential career opportunities, mentorship, and
                  collaboration.</p>
              </div>

              <div className='my-3'>
                  <b>Flexibility and Accessibility</b>
                  <p>The course offers flexibility and accessibility through
                  online delivery, allowing participants to access course materials and attend sessions
                  remotely from anywhere with an internet connection. This flexibility accommodates
                  diverse schedules and commitments, making the course accessible to individuals with
                  varying backgrounds and circumstances.</p>
              </div>
            </div>
          </div>

          </div>

          <div className='w-full lg:w-1/3'>
          <div className='bg-primary-50 flex flex-row rounded-mobBigBox w-full'>
            <div className='pl-10 border-dashed border-r-4 border-r-primary-300' />
            <div className='p-8'>
              <p className=''>Fees for this course</p>
              <div className='font-bold text-xl'>₹60,000</div>
              <p className='pt-4'>Start date</p>
              <div className='font-bold text-xl'>1st May 2024</div>
              <p className='pt-4'>Course Duration</p>
              <div className='font-bold text-xl'>3 Months</div>
              <p className='pt-4'>Mode of Course</p>
              <div className='font-bold text-xl'>Online</div>
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

export default FigmaMasterclass;
