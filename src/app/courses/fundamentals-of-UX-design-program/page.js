'use client';

import React, { useState } from 'react';
import '../../../app/globals.css'

const FundamentalOfUXDesignProgram = () => {
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

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full flex flex-col px-6 lg:px-0'>
      <div className='w-full px-4 lg:px-28 z-0'> 
        <img className='rounded-b-mobBigBox lg:rounded-b-bigBox h-vh' src='https://design-habitat.nyc3.cdn.digitaloceanspaces.com/banners/banner-rushab.png' />
      </div>
      
      <div className='mt-6 hidden lg:block border border-y-4 border-r-4 border-dashed border-primary-300 rounded-r-mobBigBox shadow-lg pr-10 py-8 w-fit bg-white text-secondary-500 '>
        <div className='text-4xl font-mont font-bold pl-20 '>Fundamentals Of UX Design Program</div>
        <p className='pl-20 '>by <span className='text-xl'>Mr. Rushab Kataria, Mricrosoft</span></p>
        <div className='flex flex-row mt-4 items-center h-fit justify-between'>
          <div className='flex'>
            <div className='bg-primary-500 rounded-r-md py-1 pl-20 pr-4 text-secondary-900 font-medium items-center'>Starts on: 1 May 2024</div>
            <div className='mx-4 font-medium text-lg items-center'>Duration: 3 Months</div>
          </div>
          <button className='buttonCSS'  onClick={toggleModal}><div className='flex flex-row items-center'><div>Register</div> <img className='pl-2 h-4' src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/arrow.svg" /></div></button>
        </div>
      </div>

      {/* mobile title specialization */}
      <div className='
      mx-4 mt-4 block lg:hidden border-2 p-4 border-dashed border-primary-300 rounded-lg bg-white text-secondary-500'>
        <div className='text-2xl font-mont font-semibold text-center'>Fundamentals Of UX Design Program</div>
        <p className='text-secondary-800 text-center py-2'>by <span className='text-xl '>Mr. Rushab Kataria, Microsoft</span></p>
        <p className='rounded-md px-6 font-medium text-center'>Starts on: 1 May 2024</p>
        <div className='text-center'>Duration: 3 Months</div>
      </div>
      
      <div className="mt-10 w-full">
        <div className='px-2 md:px-20 flex flex-col-reverse md:flex-row w-full'>
          <div className='w-full lg:w-2/3 pr-4 lg:pr-10'>
          <div className='text-xl font-medium font-mont pt-10 lg:pt-0 md:pb-1'>Description</div>
          <div>User Experience (UX) Design is a critical component of creating successful digital products and services. This three-month online course provides participants with a comprehensive understanding of the fundamental principles, theories, and techniques of UX design. Delivered by an industry professional with extensive experience in the field, the course offers a blend of theoretical knowledge and practical skills necessary for aspiring UX designers.</div>


          <hr className='border-primary-500 border-t-2 my-6' />
          {/* Prerequisites */}
          <div className='text-xl font-medium font-mont md:pb-1'>Prerequisites</div>
          <div>
            1. Basic computer literacy and proficiency in using common software applications. <br />
            2. Familiarity with web browsing and internet navigation.<br />
            3. Strong interest in user experience (UX) design and a desire to learn foundational principles.<br />
            4. No prior experience in UX design is required, but a passion for creativity and problem-solving is beneficial.<br />
            5. Access to a computer or laptop with a stable internet connection.<br />
            6. Willingness to engage actively in coursework, participate in discussions, and complete assignments.<br />
            7. Openness to feedback and a commitment to continuous learning and improvement.<br />
            8. Time commitment to dedicate to self-paced learning and completion of course requirements.
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
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 1-2: </span>Introduction to UX Design and User Research </div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 3-4: </span>Information Architecture and Interaction Design </div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 5-6: </span>Prototyping and Wireframing</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 7-8: </span>Usability Testing and Evaluation</div>
              <div className='font-semibold py-2 md:py-4 '><span className='font-normal pr-2'>Weeks 9-10: </span>Visual Design Principles and Design Thinking Weeks 11-12: Final Project and Portfolio Development</div>
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
                <li>1. Introduction to UX Design: Understand the importance of UX design in product development, its principles, and its role in creating meaningful user interactions.</li>
                <li>2. User Research: Learn various methods and techniques for conducting user research to gather insights into user behaviors, needs, and preferences.</li>
                <li>3. Information Architecture: Explore the principles of organizing and structuring information effectively to enhance usability and accessibility.</li>
                <li>4. Interaction Design: Gain insights into designing intuitive and engaging user interfaces through principles of interaction design, usability, and human-computer interaction (HCI).</li>
                <li>5. Prototyping and Wireframing: Learn to create low-fidelity and high-fidelity prototypes using industry-standard tools to visualize and communicate design concepts.</li>
                <li>6. Usability Testing: Understand the importance of usability testing in validating design decisions and improving the overall user experience.</li>
                <li>7. Visual Design Principles: Explore the fundamentals of visual design, including typography, color theory, and layout, to create aesthetically pleasing interfaces.</li>
                <li>8. Design Thinking: Adopt a user-centered approach to problem-solving by integrating design thinking methodologies into the UX design process.  </li>
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
                <li>1. Expert Instruction: Learn from an industry professional with extensive experience and expertise in UX design, providing valuable insights and practical knowledge.</li>
                <li>2. Industry relevant Curriculum: Dive deep into concepts and methodologies essential for succeeding in the competitive field of UX design within the industry.</li>
                <li>3. Hands-on Learning: Engage in interactive workshops, group projects, and case studies to apply learned concepts in real-world scenarios, fostering practical skills and experience.</li>
                <li>4. Industry-Relevant Content: Stay updated with the latest trends, technologies, and best practices shaping the UX design landscape within the industry.</li>
                <li>5. Networking Opportunities: Connect with fellow participants, industry experts, and guest speakers through collaborative projects, expert panels, and interactive sessions, expanding your professional network.</li>
                <li>6. Portfolio Development: Receive guidance on developing a comprehensive UX design portfolio showcasing your skills, projects, and expertise to prospective employers or clients.</li>
                <li>7. Career Advancement: Enhance your career prospects and leadership abilities by gaining proficiency in advanced UX design concepts, strategies, and leadership skills.</li>
                <li>8. Flexible Learning: Access course materials, lectures, and assignments online, allowing flexibility to balance learning with other commitments.</li>
                <li>9. Practical Projects: Work on real-world projects and case studies, gaining hands-on experience and building a portfolio of work that demonstrates your expertise in advanced UX design.</li>
                <li>10. Certification: Receive a certificate of completion upon successfully demonstrating proficiency in advanced UX design concepts through a final project, validating your skills and expertise in the field</li>
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
              <div>The industry relevance of the 3-month online Fundamentals of UX Design course lies in its alignment with the current demands and trends within the UX design industry. Here's how:</div>
              <div className='my-3'>
                  <b>Entry Level Skills Development</b>
                  <p>For individuals seeking to enter the UX design field, this course provides a solid foundation in essential principles and techniques. Many industries, from technology to healthcare to finance, are increasingly recognizing the importance of UX design in product development. Therefore, there's a demand for entry-level professionals who understand the fundamentals of UX design.</p>
              </div>
              <div className='my-3'>
                  <b>Addressing Industry Gaps</b>
                  <p>There's a growing need in various industries for professionals who possess UX design skills. However, there's often a shortage of individuals with the necessary knowledge and expertise. This course helps bridge that gap by equipping participants with the fundamental skills required to start a career in UX design.</p>
              </div>
              <div className='my-3'>
                  <b>Adaptability Across Industries</b>
                  <p>The course covers core concepts such as user research, information architecture, interaction design, and usability testing, which are applicable across a wide range of industries. Whether it's designing mobile apps, websites, software interfaces, or even physical products, the principles of UX design remain relevant and applicable.</p>
              </div>

              <div className='my-3'>
                  <b>Industry Driven Curriculum</b>
                  <p>The course content is designed based on industry standards and best practices, ensuring that participants learn skills that are directly applicable in real-world scenarios. By focusing on practical applications and case studies, the course prepares participants to tackle challenges commonly encountered in the industry.</p>
              </div>

              <div className='my-3'>
                  <b>Meeting Employer Demands</b>
                  <p>Employers across industries are actively seeking candidates with UX design skills to enhance their product development processes and deliver better user experiences. Completing a course in UX design demonstrates to employers that candidates have invested time and effort in acquiring relevant skills, making them more attractive candidates for entry-level positions.</p>
              </div>

              <div className='my-3'>
                  <b>Remote Work Opportunities</b>
                  <p>he online delivery format of the course enables participants to learn from anywhere, making it accessible to individuals around the world. As remote work becomes increasingly common, the ability to learn UX design skills online provides opportunities for individuals to enter the field without geographical constraints.</p>
              </div>

              <div className='my-3'>
                  <b>Pathway to Further Specialization</b>
                  <p>While the course focuses on the fundamentals of UX design, it also serves as a stepping stone for individuals interested in pursuing more specialized roles or advanced studies in UX design. Participants who complete the course can further develop their skills and knowledge in specific areas of interest, such as UX research, interaction design, or UX strategy.</p>
              </div>

              <p>In summary, the 3-month online Fundamentals of UX Design course is highly relevant to the industry as it addresses the increasing demand for skilled UX professionals, equips participants with essential skills applicable across industries, and prepares them for entry-level positions or further specialization in the field.</p>
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
              <div>The Fundamentals of UX Design course offers numerous opportunities for individuals looking to enter or advance in the field of UX design. Here are some potential opportunities that participants can expect:</div>
              <div className='my-3'>
                  <b>Entry Level UX Design Position</b>
                  <p>Upon completing the course, participants will be equipped with the foundational knowledge and skills necessary to pursue entry-level positions in UX design. These positions may include UX designer, UI designer, interaction designer, or user researcher roles in various industries such as technology, e-commerce, healthcare, finance, and more.</p>
              </div>
              <div className='my-3'>
                  <b>Career Switching</b>
                  <p>For individuals looking to transition into a career in UX design from a different field, this course provides a solid introduction to the principles and practices of UX design. It offers an opportunity to acquire new skills and pivot into a field with growing demand and opportunities for career advancement.</p>
              </div>
              <div className='my-3'>
                  <b>Freelancing and Consulting</b>
                  <p>Completing the course enables participants to offer freelance or consulting services in UX design. They can work with clients across different industries to improve the user experience of their digital products or services, providing valuable expertise in user research, information architecture, interaction design, and more.</p>
              </div>

              <div className='my-3'>
                  <b>Further Education and Specialization</b>
                  <p>The course serves as a foundation for further education and specialization in UX design. Participants may choose to pursue advanced courses, workshops, or certifications in specific areas such as UX research, interaction design, or UX strategy to deepen their expertise and expand their career opportunities.</p>
              </div>

              <div className='my-3'>
                  <b>Entrepreneurship</b>
                  <p>Armed with UX design skills, participants have the opportunity to launch their own startups or digital products. They can apply their knowledge to create user-friendly and intuitive products that address specific user needs or pain points, potentially leading to entrepreneurial success and business growth.</p>
              </div>

              <div className='my-3'>
                  <b>Career Advancement</b>
                  <p>For individuals already working in the field of UX design, completing the course can lead to career advancement opportunities. It demonstrates a commitment to professional development and a desire to stay updated with industry best practices, making participants more competitive for promotions and leadership roles within their organizations.</p>
              </div>

              <div className='my-3'>
                  <b>Networking and Collaboration</b>
                  <p>Throughout the course, participants have the opportunity to connect with industry professionals, fellow students, and potential employers through networking events, online forums, and collaborative projects. These connections can lead to job opportunities, mentorship, and collaboration on future projects.</p>
              </div>

              <p>Overall, the Fundamentals of UX Design course opens up a wide range of opportunities for individuals interested in pursuing a career in UX design or advancing their existing careers in the field. Whether it's entering the job market, starting a freelance business, pursuing further education, or exploring entrepreneurial ventures, participants can leverage the skills and knowledge gained from the course to pursue various career paths within the dynamic and rapidly growing field of UX design.</p>
            </div>
          </div>

          </div>

          <div className='w-full lg:w-1/3'>
          <div className='bg-primary-50 flex flex-row rounded-mobBigBox w-full shadow-lg'>
            <div className='pl-10 border-dashed border-r-4 border-r-primary-300' />
            <div className='p-8'>
              <p className=''>Fees for this course</p>
              <div className='font-bold text-xl'>₹60,000 + GST</div>
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
                <button className="close-btn" onClick={toggleModal}>X</button>
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

export default FundamentalOfUXDesignProgram;
