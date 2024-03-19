import React from 'react'
import '../../app/globals.css'  


const About = () => {
  return (
    <div>
        <div className='text-4xl orange-title-font text-center py-4 md:py-10'>About Design Habitat</div> 
        <img className="w-full" src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/first-about-section.png" />
        
        <div className='about-bg'>
        {/* second section */}
          <div className='px-5 md:px-40 pt-20'>
            <div className='flex flex-wrap md:flex-row w-full'>
              <div className='w-full md:w-2/3 pr-2 md:pr-32'>
                <div className='orange-title-font mb-4'>Who we are</div>
                <div className='text-md md:text-lg'>The Design Habitat is established as a premier centre for immersive Design experiences, conceived by seasoned professionals with extensive expertise in Design and innovation. Our core team comprises educators from esteemed institutions such as IIT, NID, and MITID, dedicated to nurturing talent and fostering creativity. </div>
              </div>
              <div className='w-full md:w-1/3'>
                <img className="avatar-size" src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/illustration-2.svg"/>
              </div>
            </div>
          </div>
        {/* third section */}
          <div className='px-5 md:px-40 bg-primary-50 rounded-mobBigBox md:rounded-bigBox'>
            <div className='flex flex-wrap-reverse md:flex-row w-full pt-4 md:pt-20'>
              <div className='w-full md:w-1/3'>
                <img className="avatar-size md:pl-10" src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/girl.png"/>
              </div>
              <div className='w-full md:w-2/3 pr-2 md:pl-24 md:pt-4'>
                <div className='text-md md:text-lg'>At The Design Habitat, we're committed to unlocking your creative potential. We serve as a beacon of inspiration, where enthusiasm meets expertise. With our distinguished faculty members hailing from top-tier institutions and a forward-thinking curriculum, we're dedicated to providing you with the knowledge and hands-on experience essential for excelling in the ever-evolving realm of design. </div>
              </div>
            </div>
          </div>

          {/* Forth section */}
          <div className='px-5 md:px-40 py-10'>
            <div className='flex flex-wrap md:flex-row w-full'>
              <div className='w-full md:w-2/3 pr-2 md:pr-32'>
                <div className='text-md md:text-lg md:pt-20'>Embark on this thrilling and dynamic journey with us, where exploration, growth, and boundless opportunities await to propel your creativity to new heights! The Design Habitat endeavours to lay the groundwork for all aspiring individuals driven to forge a successful career in the Design industry.</div>
              </div>
              <div className='w-full md:w-1/3'>
                <img className="avatar-size justify-center" src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/coffee-cup-man-1.png"/>
              </div>
            </div>
          </div>

          {/* fifth section */}
          <div className='md:px-24 md:pt-10 flex justify-between'>
            <img className='hidden md:block h-40' src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/down-arrow-1.png"/>
            <div className='orange-title-font md:mt-10'>Our team</div>
          </div>
        </div>

        <div className='about-bg-1'>
          <div className='grid grid-col-2 md:grid-cols-3 md:gap-6 pb-20 mx-5 md:mx-28'>
            {/* <div className='w-1/3'> */}
              <div className='flex flex-col px-10'>
                <img className='team-profile' src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/profile-photos/square-profile/Intersect-6.png" />
                <div className='w-full rounded-lg text-center bg-white -mt-10 p-2 border border-primary-400'>
                  <div className='text-lg font-bold'>Aditya Wadher</div>
                  <div>Cofounder & Mentor </div>
                </div>
              </div>
              <div className='flex flex-col px-10'>
                <img className='team-profile' src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/profile-photos/square-profile/Intersect-1.png" />
                <div className='w-full rounded-lg text-center bg-white -mt-10 p-2 border border-primary-400'>
                  <div className='text-lg font-bold'>Aditya Wadher</div>
                  <div>Mentor</div>
                </div>
              </div>
              <div className='flex flex-col px-10'>
                <img className='team-profile' src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/profile-photos/square-profile/Intersect-2.png" />
                <div className='w-full rounded-lg text-center bg-white -mt-10 p-2 border border-primary-400'>
                  <div className='text-lg font-bold'>Rushab Kataria</div>
                  <div>Mentor</div>
                </div>
              </div>
              <div className='flex flex-col px-10'>
                <img className='team-profile' src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/profile-photos/square-profile/Intersect-3.png" />
                <div className='w-full rounded-lg text-center bg-white -mt-10 p-2 border border-primary-400'>
                  <div className='text-lg font-bold'>Neha Raut</div>
                  <div>Mentor</div>
                </div>
              </div>
              <div className='flex flex-col px-10'>
                <img className='team-profile' src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/profile-photos/square-profile/Intersect.png" />
                <div className='w-full rounded-lg text-center bg-white -mt-10 p-2 border border-primary-400'>
                  <div className='text-lg font-bold'>Suraj Asawa</div>
                  <div>Mentor</div>
                </div>
              </div>
              <div className='flex flex-col px-10'>
                <img className='team-profile' src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/profile-photos/square-profile/Intersect-5.png" />
                <div className='w-full rounded-lg text-center bg-white -mt-10 p-2 border border-primary-400'>
                  <div className='text-lg font-bold'>Suvodeep Mishra</div>
                  <div>Mentor</div>
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>
    </div>
  )
}
export default About

// ns13.magicworkshost.com
// ns14.magicworkshost.com 

// thedesignhabitat.com