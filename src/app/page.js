'use client'

import { useRouter } from 'next/navigation';
import Image from "next/image";
import "./globals.css";

const data = [
  {
    "id": 1,
    "img": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/profile-photos/square-profile/Rushab.jpg",
    "name": "Rushab, Microsoft",
    "courseName":"Fundamentals of UX Design",
    "mode":"online",
    "startDate":"1 May 2024",
    "oneLine":'Master the essentials of UX design and craft intuitive digital experiences with our comprehensive online program',
    "url":'/courses/fundamentals-of-UX-design-program'
  },
  {
    "id": 2,
    "img": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/profile-photos/square-profile/suraj.jpg",
    "name": "Suraj, Nutanix",
    "courseName":"Figma Masterclass",
    "mode":"online",
    "startDate":"1 May 2024",
    "oneLine":'Unlock the full potential of Figma and revolutionize your design workflow with our comprehensive online master class',
    "url":'/courses/figma-masterclass'
  },
  {
    "id": 3,
    "img": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/profile-photos/square-profile/Aditya.jpg",
    "name": "Aditya, Thoughtspot",
    "courseName":"Advanced UX Design",
    "mode":"online",
    "startDate":"1 May 2024",
    "oneLine":'Elevate your UX design expertise to the next level with our advanced online program, exploring cutting-edge strategies and innovative techniques',
    "url":'/courses/advanced-UX-design-program'
  },
]; 
export default function Home() {
  const router = useRouter();

  // const handleRedirect = (path) => {
  //   history.push(path);
  // }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 lg:p-24 text-orange-600">
      <div></div>

      {/* courses section */}
      <div className='my-4 md:my-20'>
        <div className='orange-title-font mb-10 text-center'>Our Upcoming Course</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {data.map(item => (
                <div key={item.id} className='text-center w-full justify-center'>
                  <div className='w-full flex justify-center'>
                    <img className='h-80' src={item.img} />
                  </div>
                  <div className='bg-primary-50 px-4 text-lg w-fit rounded-full shadow-md mode-badge text-secondary-500'>
                    {item.mode}
                  </div>
                  <div className='w-full flex justify-center -mt-10'>
                    <div className='bg-primary-400 px-6 py-2 font-medium text-lg w-fit rounded-full shadow-md'>{item.name}</div>
                  </div>
                  <div className="shadow-md p-4 md:px-8 md:py-2 text-center rounded-mobBigBox bg-primary-50">
                    <div className='text-xl pb-2 text-secondary-500 font-bold'>{item.courseName}</div>
                    <div className='h-24 text-left px-2'>{item.oneLine}</div>
                    <div className='font-bold'>{item.startDate}</div>
                    <button onClick={() => router.push(item.url)} className="my-2 rounded-full bg-secondary-500 text-white py-2 px-6">Check Details</button>
                  </div>
                </div>
          ))
        }
        </div>
      </div>
      {/* about design habitat */}
      <div className="rounded-mobBigBox lg:rounded-bigBox container bg-primary-400">
        <div className='flex flex-wrap lg:flex-row w-full py-8 md:py-16'>
          <div className='w-full lg:w-2/3 pr-2 lg:pr-20'>
            <div className='brown-title-font mb-1'>Little about Design Habitat</div>
            <div className='text-md lg:text-lg '>Embark on this thrilling and dynamic journey with us, where exploration, growth, and boundless opportunities await to propel your creativity to new heights! The Design Habitat endeavours to lay the groundwork for all aspiring individuals driven to forge a successful career in the Design industry.</div>
          </div>
          <div className='w-full lg:w-1/3 justify-center'>
            <img className="avatar-size mt-8 md:mt-0" src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/Introduction-6.png"/>
          </div>
        </div>
      </div>
    </main>
  );
}
