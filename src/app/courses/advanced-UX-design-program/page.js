'use client';

import React, { useState } from 'react';
import '../../../app/globals.css'

const AdvancedUXDesignProgram = () => {
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

  return (
    <div className='w-full flex flex-col px-6 lg:px-0'>
      <div className='w-full px-4 lg:px-20 rounded-mobBigBox lg:rounded-bigBox z-0'> 
        <img className='h-vh' src='https://design-habitat.nyc3.cdn.digitaloceanspaces.com/banners/Rectangle%20346.png' />
      </div>
      
      <div className='mt-10 hidden lg:block border border-y-4 border-r-4 border-dashed border-primary-300 rounded-r-mobBigBox shadow-lg pr-10 py-8 w-fit z-50 bg-white text-secondary-500 '>
        <div className='text-4xl font-mont font-bold pl-20 '>Advanced UX Design program</div>
        <p className='pl-20 '>by <span className='text-xl'>Mr. Aditya, Thoughtspot</span></p>
        <div className='flex flex-row mt-4 items-center h-fit justify-between'>
          <div className='flex'>
            <div className='bg-primary-500 rounded-r-md py-1 pl-20 pr-4 text-secondary-900 font-medium items-center'>Starts on: 1 May 2024</div>
            <div className='mx-4 font-medium text-lg items-center'>Duration: 7 Months</div>
          </div>
          <button className='buttonCSS'><div className='flex flex-row items-center'><div>Register</div> <img className='pl-2 h-4' src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/arrow.svg" /></div></button>
        </div>
      </div>

      {/* mobile title specialization */}
      <div className='
      mx-4 mt-4 block lg:hidden border-2 p-4 border-dashed border-primary-300 rounded-lg bg-white text-secondary-500'>
        <div className='text-2xl font-mont font-semibold text-center'>Advanced UX Design program</div>
        <p className='text-secondary-800 text-center py-2'>by <span className='text-xl '>Mr. Aditya, Thoughtspot</span></p>
        <p className='rounded-md px-6 font-medium text-center'>Starts on: 1 May 2024</p>
        <div className='text-center'>Duration: 7 Months</div>
      </div>
      
      <div className="mt-10 w-full">
        <div className='px-2 md:px-20 flex flex-col-reverse md:flex-row w-full'>
          <div className='w-full lg:w-2/3 pr-4 lg:pr-10'>
          <div className='text-xl font-medium font-mont pt-10 lg:pt-0 md:pb-1'>Description</div>
          <div>EThe Advanced UX Design course is a comprehensive six-month program designed to equip
                participants with advanced skills and knowledge in user experience (UX) design. This online
                course offers a flexible learning environment, enabling students to study at their own pace
                while benefiting from expert guidance and practical projects.</div>


          <hr className='border-primary-500 border-t-2 my-6' />
          {/* Prerequisites */}
          <div className='text-xl font-medium font-mont md:pb-1'>Prerequisites</div>
          <div>
            1. Proficiency in fundamental UX design principles and methodologies, or completion of a beginner-level UX design course.<br />
            2. Strong understanding of design thinking processes and user-centered design concepts.<br />
            3. Experience using design tools such as Figma.<br />
            4. Familiarity with prototyping and wireframing techniques.<br />
            5. Basic knowledge of HTML, CSS, and JavaScript may be beneficial but not mandatory.<br />
            6. Access to a computer with reliable internet connection and necessary software tools.<br />
            7. Willingness to engage in advanced coursework, hands-on projects, and collaborative activities.<br />
            8.Ability to dedicate sufficient time for self-study, assignments, and group discussions.<br />
            9.Openness to feedback and a growth mindset to continuously improve design skills.<br />
            10.Eagerness to explore advanced topics in UX design and push the boundaries of creativity and innovation.
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
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 1-2: </span>Observation & Discovery </div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 3-4: </span>Desk Research & Analysis</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 5-6: </span>Primary Research and Analysis</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 7: </span>Problem Scoping</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 8-9: </span>Persona Scoping</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 10: </span>Ideation & Brainstorming</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 11: </span>Design Sprint</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 12: </span>Feature building, prioritization & planning</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 13: </span>Product Requirements Documentation</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 14: </span>User Flow Mapping</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 15: </span>Information Architecture Design</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 16: </span>UX Design Case Studies</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 17: </span>Color Psychology & Application</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 18: </span>Typography in UX Design</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 19: </span>UI Components Design</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 20: </span>Layout Design Principles</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 21: </span>Content and Strategy Design</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 22: </span>Design Systems</div>
              <div className='font-semibold py-2 md:py-4 border-b-2 border-dashed border-primary-100'><span className='font-normal pr-2'>Weeks 23: </span>Rapid Prototyping Techniques</div>
              <div className='font-semibold py-2 md:py-4 '><span className='font-normal pr-2'>Weeks 24: </span>Testing and Iterations</div>
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
                <li>1. Develop Advanced Research Skills: Equip students with advanced observational,
                  qualitative, and quantitative research skills to gather comprehensive user insights and
                  data for informed UX design decisions.</li>
                <li>2. Refine Problem-solving Abilities using Industry relevant tools and techniques:
                    Enhance students' ability to scope, define, and prioritize design problems, ensuring
                    alignment with user needs, business objectives, and technological constraints using
                    industry relevant tools and techniques.</li>
                <li>3. Create Effective User Personas and Journeys: Enable students to develop rich user
                    personas and user journey maps based on robust research findings, fostering
                    empathy and understanding of user behaviors and motivations.</li>
                <li>4. Foster Creative Ideation and Collaboration: Cultivate students' capacity to generate
                    innovative design solutions through structured ideation techniques and collaborative
                    design processes, such as design sprints.</li>
                <li>5. Master Advanced UI Design practices : Provide students with a deep understanding
                    of advanced UI design principles, including layout, typography, color theory, and
                    component design, to create visually appealing and intuitive interfaces.</li>
                <li>6. Implement Design Systems and Standards: Train students in the creation and
                    implementation of design systems and standards, ensuring consistency, scalability,
                    and efficiency across UX design projects.</li>
                <li>7. Facilitate Prototyping and Iteration: Enable students to effectively prototype and
                    iterate designs using various tools and methods, facilitating rapid testing and
                    refinement of design solutions.</li>
                <li>8. Emphasize User-Centric Design Practices: Instill a user-centric mindset in students,
                    emphasizing the importance of accessibility, inclusivity, and user feedback in creating
                    meaningful and impactful user experiences.</li>
                <li>9. Prepare for Real-world Challenges: Provide students with practical skills and
                    experiences that prepare them to tackle real-world UX design challenges, from project
                    scoping to final product delivery.</li>

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
                <li>1.Flexible Online Learning: Access course materials and lectures anytime, anywhere,
                    through a convenient online platform, allowing students to balance their studies with
                    other commitments.</li>
                <li>2. Expert Instruction: Learn from industry experts and experienced UX designers through
                    engaging video lectures, live webinars, and personalized feedback on assignments,
                    gaining valuable insights and guidance throughout the course.</li>
                <li>3. Hands-on Projects and Assignments: Engage in practical projects and assignments
                    that simulate real-world UX design challenges, providing opportunities to apply
                    theoretical concepts and develop practical skills.</li>
                <li>4. Community Engagement: Collaborate with peers, participate in discussion forums,
                    and network with fellow students and instructors, fostering a supportive and
                    interactive learning community.</li>
                <li> 5. Career Support: Receive guidance on building a professional UX design portfolio,
                    preparing for job interviews, and advancing your career in the field of UX design, with
                    dedicated support and resources available throughout the course.</li>
                <li>6. Comprehensive Curriculum: Explore a comprehensive curriculum covering a wide
                    range of topics, including research methodologies, problem scoping, ideation,prototyping, UI design principles, and more, ensuring a well-rounded understanding
                    of advanced UX design concepts and techniques.</li>
                <li>7. Industry oriented Practical Skills Development: Develop industry oriented practical
                    skills in user research, prototyping, UI design, and design system implementation,
                    through hands-on exercises, projects, and case studies, enhancing your ability to
                    create impactful and user-centered design solutions.</li>
                <li>8. Emphasis on Innovation and Creativity: Foster creativity and innovation through
                    structured ideation sessions, design sprints, and creative problem-solving exercises,
                    encouraging students to think outside the box and explore novel approaches to UX
                    design challenges.</li>
                <li>9. Focus on User-Centric Design: Emphasize the importance of user-centric design
                    practices, accessibility, and inclusivity, ensuring that students develop a deep
                    understanding of user needs and preferences, and can create designs that truly
                    resonate with users.</li>
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
              <div className='my-3'>
                  <b>Growing Demand for UX Designers: </b>
                  <p> With the increasing focus on user experience
                        across industries, there is a high demand for skilled UX designers who can create
                        intuitive and user-friendly digital products and services.</p>
                    </div>
              <div className='my-3'>
              <b>Advanced Skill Set: </b>
                  <p>The course equips students with advanced industry relevant skills
                        and knowledge in UX design, covering a wide range of topics such as research
                        methodologies, prototyping, UI design principles, and design system implementation,
                        making them highly valuable to employers in the industry.</p>
                   </div>
              <div className='my-3'>
              <b>Competitive Advantage: </b>
                  <p>Graduates of the course gain a competitive advantage in the
                        job market, as they possess a comprehensive understanding of advanced UX design
                        concepts and techniques, allowing them to create innovative and impactful design
                        solutions.</p></div>
              <div className='my-3'>
                    <b>Adaptability to Industry Trends: </b>
                  <p>The course emphasizes continuous learning and
                        staying updated on industry trends and best practices, ensuring that students are
                        well-prepared to adapt to the evolving landscape of UX design and meet the changing
                        needs of the industry.</p></div>
              <div className='my-3'>
                    <b>Real-world Experience: </b>
                  <p>Through hands-on projects, assignments, and case studies,
                        students gain practical experience working on real-world UX design challenges,
                        allowing them to build a portfolio of work that demonstrates their skills and
                        capabilities to potential employers.</p></div>
              <div className='my-3'>
                  <b>Collaboration and Communication Skills:</b>
                  <p>The course encourages collaboration and
                        communication with peers and instructors, simulating the teamwork and
                        communication skills required in professional UX design environments, preparing
                        students for success in industry settings.</p>
            </div>
              <div className='my-3'>
                  <b>Focus on User-Centric Design: </b>
                  <p>The course places a strong emphasis on user-centric
                    design practices, ensuring that students develop a deep understanding of user needs
                    and preferences, and can create designs that effectively address user pain points and
                    enhance the overall user experie</p>
                </div>
              <div className='my-3'>
                  <b>Freelance Opportunities: </b>
                  <p>With the growing demand for UX design expertise,
                      graduates may explore freelance opportunities, offering their services to businesses
                      and organizations seeking to improve their digital products and services.</p></div>
              
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
              <ul className='font-normal'> 
                <li>1. Career Advancement: Graduates of the course will be well-equipped to pursue various
                    career opportunities in the field of UX design, including roles such as UX designer, UI
                    designer, interaction designer, UX researcher, product designer, and more.</li>
                <li>2. Job Placement: The course provides students with the skills and knowledge sought
                    after by employers in industries such as technology, e-commerce, finance, healthcare,
                    and more, increasing their chances of securing job placements upon completion.</li>
                <li>3. Freelance Opportunities: With the growing demand for UX design expertise,
                    graduates may explore freelance opportunities, offering their services to businesses
                    and organizations seeking to improve their digital products and services</li>
                <li>4. Entrepreneurship: Armed with advanced skills in UX design, graduates may choose to
                    start their own design agencies or consultancy firms, providing UX design solutions to
                    clients across various industries.</li>
                <li>5. Specialization: The course offers opportunities for students to specialize in specific
                    areas of UX design, such as user research, interaction design, accessibility design, or
                    UX strategy, allowing them to carve out a niche for themselves in the industry.</li>
                <li>6. Networking: Through collaboration with peers, interaction with industry experts, and
                    participation in online forums and communities, students have the opportunity to
                    build valuable professional networks that can open doors to job opportunities,
                    mentorship, and collaboration.</li>
                <li>7. Continued Learning: The course fosters a culture of continuous learning and growth,
                    encouraging students to stay updated on industry trends, emerging technologies, and
                    best practices in UX design, paving the way for ongoing career development and
                    advancement.</li>
                <li>8. Global Opportunities: As the course is offered online, students have the flexibility to
                    learn from anywhere in the world, opening up opportunities to work with global
                    clients and organizations and to pursue international career paths in UX design.</li>
              </ul>
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
            </div>
          </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AdvancedUXDesignProgram;
