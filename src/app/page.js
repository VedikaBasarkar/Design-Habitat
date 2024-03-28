'use client'

import { useRouter } from 'next/navigation';
import Carousel from '../components/carousel'
import Image from "next/image";
import "./globals.css";

const data = [
  {
    "id": 1,
    "img": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/profile-photos/square-bg-bw/rushab-bg-bw.jpg",
    "name": "Rushab, Microsoft",
    "courseName":"Fundamentals of UX Design",
    "mode":"online certification",
    "startDate":"1 May 2024",
    "oneLine":'Master the essentials of UX design and craft intuitive digital experiences with our comprehensive online program',
    "url":'/courses/fundamentals-of-UX-design-program'
  },
  {
    "id": 2,
    "img": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/profile-photos/square-bg-bw/Suraj-bg-bw.jpg",
    "name": "Suraj, Nutanix",
    "courseName":"Figma Masterclass",
    "mode":"online certification",
    "startDate":"1 May 2024",
    "oneLine":'Unlock the full potential of Figma and revolutionize your design workflow with our comprehensive online master class',
    "url":'/courses/figma-masterclass'
  },
  {
    "id": 3,
    "img": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/profile-photos/square-bg-bw/Vector.jpg",
    "name": "Aditya, Thoughtspot",
    "courseName":"Advanced UX Design",
    "mode":"online certification",
    "startDate":"1 May 2024",
    "oneLine":'Elevate your UX design expertise to the next level with our advanced online program, exploring cutting-edge strategies and innovative techniques',
    "url":'/courses/advanced-UX-design-program'
  },
]; 

const offLine = [
  {
    "id": 1,
    "img": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/course%20icon-02.jpg",
    "courseName":"Design Launchpad",
    "mode":"Offline Courses",
    "duration":"2 Years",
    "oneLine":'An exhaustive 2-year Design preparation program offered to learners after completion of Grade 10.',
    "url":'/courses/design-launchpad'
  },
  {
    "id": 2,
    "img": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/course%20icon-01.jpg",
    "courseName":"Design Dojo",
    "mode":"Offline Courses",
    "duration":"1 Year",
    "oneLine":'An exhaustive fast track 1-year Design preparation program offered to learners after completion of Grade 11.',
    "url":'/courses/design-dojo'
  },
  {
    "id": 3,
    "img": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/course%20icon-03.jpg",
    "courseName":"Design Master",
    "mode":"Offline Courses",
    "duration":"1 Year",
    "oneLine":'An exhaustive fast track 1-year Design preparation program offered to learners completing their final year of graduation or who have completed their graduation.',
    "url":'/courses/design-master'
  },
]; 

export default function Home() {
  const router = useRouter();

  return (
    <main className="p-2 pb-10 md:px-16 lg:px-24 text-orange-600">
      {/* <Carousel className="z-10" /> */}
      <div>
        <img src='https://design-habitat.nyc3.cdn.digitaloceanspaces.com/banners/home-cover.jpg' />
      </div>
      {/* courses section */}
      <div className='my-4 md:my-40'>
        <div className='orange-title-font mb-10 text-center'>Our Courses</div>
        <div className='text-2xl font-mont font-semibold mb-10 md:mb-20 text-center'>Online Professional Design Courses</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
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
                  <div className="shadow-md p-4 lg:px-8 lg:py-2 text-center rounded-mobBigBox bg-primary-50">
                    <div className='text-xl pb-2 text-secondary-500 font-bold pt-2 '>{item.courseName}</div>
                    <div className='h-auto md:h-40 xl:h-24 text-left px-2'>{item.oneLine}</div>
                    <div className='font-bold'>{item.startDate}</div>
                    <button onClick={() => router.push(item.url)} className="my-2 rounded-full bg-secondary-500 text-white py-2 px-6">Check Details</button>
                  </div>
                </div>
          ))
        }
        </div>
      </div>
      {/* courses section */}
      <div className='my-4 md:my-40'>
        <div className='brown-title-font text-center'>Classroom Courses</div>
        <div className='font-semibold mb-10 md:mb-20 text-center font-sans text-xl'>(for NID, U/CEED, NIFT)</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {offLine.map(item => (
                <div key={item.id} className='text-center w-full justify-center'>
                  <div className='w-full flex justify-center'>
                    <img className='h-80' src={item.img} />
                  </div>
                  <div className='bg-primary-50 px-4 text-lg w-fit rounded-full shadow-md mode-badge text-secondary-500'>
                    {item.mode}
                  </div>
                  <div className="shadow-md p-4 lg:px-8 lg:py-2 text-center rounded-mobBigBox bg-primary-50">
                    <div className='text-xl pb-2 text-secondary-500 font-bold pt-2 '>{item.courseName}</div>
                    <div className='h-auto md:h-40 xl:h-24 text-left px-2'>{item.oneLine}</div>
                    <div className='font-bold'>{item.duration}</div>
                    <button onClick={() => router.push(item.url)} className="my-2 rounded-full bg-secondary-500 text-white py-2 px-6">Check Details</button>
                  </div>
                </div>
          ))
        }
        </div>
      </div>
      {/* about design habitat */}
      <div className="rounded-mobBigBox lg:rounded-bigBox container bg-primary-400 mb-20">
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
