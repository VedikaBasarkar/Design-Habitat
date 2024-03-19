import React from 'react'
import '../../app/globals.css'  


const About = () => {
  const data = [
    {
      "id": 1,
      "url": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/profile-photos/square-profile/Intersect-6.png",
      "name": "Pranali Bankar",
      "profile": "Cofounder & Mentor"
    },
    {
      "id": 2,
      "url": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/profile-photos/square-profile/Intersect-1.png",
      "name": "Aditya Wadher",
      "profile": "Mentor"
    },
    {
      "id": 3,
      "url": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/profile-photos/square-profile/Intersect-2.png",
      "name": "Rushab Kataria",
      "profile": "Mentor"
    },
    {
      "id": 4,
      "url": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/profile-photos/square-profile/Intersect-3.png",
      "name": "Neha Raut",
      "profile": "Mentor"
    },
    {
      "id": 5,
      "url": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/profile-photos/square-profile/Intersect.png",
      "name": "Suraj Asawa",
      "profile": "Mentor"
    },
    {
      "id": 6,
      "url": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/profile-photos/square-profile/Intersect-5.png",
      "name": "Suvodeep Mishra",
      "profile": "Mentor"
    }
  ];  
  return (
    <div>
        <div className='text-4xl orange-title-font text-center py-4 lg:py-10'>About Design Habitat</div> 
        <img className="w-full" src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/first-about-section.png" />
        
        <div className='md:about-bg'>
        {/* second section */}
          <div className='px-5 lg:px-40 pt-8 md:pt-20'>
            <div className='flex flex-wrap lg:flex-row w-full'>
              <div className='w-full lg:w-2/3 pr-2 lg:pr-32'>
                <div className='orange-title-font mb-4'>Who we are</div>
                <div className='text-md lg:text-lg'>The Design Habitat is established as a premier centre for immersive Design experiences, conceived by seasoned professionals with extensive expertise in Design and innovation. Our core team comprises educators from esteemed institutions such as IIT, NID, and MITID, dedicated to nurturing talent and fostering creativity. </div>
              </div>
              <div className='w-full lg:w-1/3'>
                <img className="avatar-size mt-8 md:mt-0" src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/illustration-2.svg"/>
              </div>
            </div>
          </div>
        {/* third section */}
          <div className='px-5 lg:px-40 bg-primary-50 rounded-mobBigBox lg:rounded-bigBox'>
            <div className='flex flex-wrap-reverse lg:flex-row w-full pt-4 lg:pt-20'>
              <div className='w-full lg:w-1/3'>
                <img className="avatar-size lg:pl-10 mt-8 md:mt-0" src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/girl.png"/>
              </div>
              <div className='w-full lg:w-2/3 pr-2 lg:pl-24 lg:pt-4'>
                <div className='text-md lg:text-lg'>At The Design Habitat, we're committed to unlocking your creative potential. We serve as a beacon of inspiration, where enthusiasm meets expertise. With our distinguished faculty members hailing from top-tier institutions and a forward-thinking curriculum, we're dedicated to providing you with the knowledge and hands-on experience essential for excelling in the ever-evolving realm of design. </div>
              </div>
            </div>
          </div>

          {/* Forth section */}
          <div className='px-5 lg:px-40 py-10'>
            <div className='flex flex-wrap lg:flex-row w-full'>
              <div className='w-full lg:w-2/3 pr-2 lg:pr-32'>
                <div className='text-md lg:text-lg lg:pt-20'>Embark on this thrilling and dynamic journey with us, where exploration, growth, and boundless opportunities await to propel your creativity to new heights! The Design Habitat endeavours to lay the groundwork for all aspiring individuals driven to forge a successful career in the Design industry.</div>
              </div>
              <div className='w-full lg:w-1/3'>
                <img className="avatar-size justify-center mt-8 md:mt-0" src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/coffee-cup-man-1.png"/>
              </div>
            </div>
          </div>

          {/* fifth section */}
          <div className='lg:px-24 lg:pt-10 flex justify-between'>
            <img className='hidden lg:block h-40' src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/down-arrow-1.png"/>
            <div className='orange-title-font lg:mt-10 container'>Our team</div>
          </div>
        </div>

        <div className='lg:about-bg-1'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-4 lg:my-0 lg:gap-6 pb-20 mx-5 lg:mx-28'>
            {/* <div className='w-1/3'> */}
            {data.map(item => (
              <div key={item.id} className='flex flex-col px-2 md:px-10 py-8 md:py-0'>
                <img className='team-profile' src={item.url} />
                <div className='w-full rounded-lg text-center bg-white -mt-10 p-2 border-2 shadow-md border-primary-400'>
                  <div className='text-md md:text-lg font-bold'>{item.name}</div>
                  <div>{item.profile} </div>
                </div>
              </div>))}
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