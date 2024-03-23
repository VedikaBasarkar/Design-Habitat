import React from 'react'
import Link from 'next/link'
import '../app/globals.css'

const Footer = () => {
  return (
    <div className='rounded-t-mobBigBox md:rounded-t-bigBox px-5 md:px-40 pt-20 bg-primary-500'>
      <div className='brown-title-font'>
        Design Habitat
      </div>
      <div className='text-xl font-semibold pb-2 '>Nurturing creative aspirants</div>
      <div className='flex flex-col md:flex-row w-full'>
        <div className='md:w-4/5'>
          <div className='flex flex-col md:flex-row'>
            <div className='w-full lg:w-2/5'>
              {/* <div className='text-xl font-bold pb-2'>Happy to help</div> */}
              <div className='flex flex-col'>
                <div className='text-lg font-bold pb-1'>Pune</div>
                <div className='py-1 md:pr-10'>6120/6130 6th floor Marvel Fuego, Magarpatta road,opposite to Seasons Mall, Hadapsar, Pune 411028</div>
                <div className=' pb-4 md:py-1 md:pr-10'>+91 788 803 3033</div>
                <div className='text-lg font-medium pb-1 '>info@thedesignhabitat.com </div>
              </div>
            </div>
            <div className='w-full lg:w-2/5'>
              <div className='flex flex-col'>
                <div className='text-lg font-bold pb-1'>Nashik</div>
                <div className='py-1 md:pr-10'>4th floor, Babubhai House, Above HDFC Bank, Near Kulkarni Garden, Sharanpur Road, Nashik - 422002</div>
                <div className='pb-4 md:py-1 md:pr-10'>+91 776 803 3033</div>
              </div>
            </div>
            <div className='w-full lg:w-1/5'>
              <div className='text-xl font-bold md:pb-1'>Quick Links</div>
              <div className='flex flex-col'>
                <Link className="md:py-1 hover:text-secondary-500" href="/about">About us</Link>
                {/* <Link className="md:py-1 hover:text-secondary-500" href="/courses">Courses</Link> */}
                <Link className="md:py-1 hover:text-secondary-500" href="/contact">Contact us</Link>
                <Link className="md:py-1 hover:text-secondary-500" href="/terms-and-conditions">Terms & Conditions</Link>
                <Link className="md:py-1 hover:text-secondary-500" href="/privacy">Privacy Policy</Link>
              </div>
            </div>
          </div>
          <div className='my-4 md:mt-16'>Copyright © 2024 Design Habitat. All rights reserved.</div>
        </div>
    </div>
    </div>
  )
}

export default Footer