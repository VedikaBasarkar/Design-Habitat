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
        <div className='w-full md:w-2/5 py-4'>
          <div className='text-xl font-bold pb-2'>Happy to help</div>
          <div className='flex flex-col'>
            <div className='w-80 py-1'>Here goes contact number</div>
            <div className='w-80 py-1'>info@thedesignhabitat.com</div>
            <div className='w-80 py-1'>Nasik Address- 4th floor, Babubhai House, Above HDFC Bank, Near Kulkarni Garden, Sharanpur Road, Nashik - 422002</div>
          </div>
        </div>
        <div className='w-full md:w-2/5 py-4'>
          <div className='text-xl font-bold pb-2'>Quick Links</div>
          <div className='flex flex-col'>
            <Link className="py-1 hover:text-white" href="/about">About us</Link>
            <Link className="py-1 hover:text-white" href="/courses">Courses</Link>
            <Link className="py-1 hover:text-white" href="/contact">Contact us</Link>
            <Link className="py-1 hover:text-white" href="/terms-and-conditions">Terms & Conditions</Link>
            <Link className="py-1 hover:text-white" href="/privacy">Privacy Policy</Link>
          </div>
        </div>
        <div className='w-full md:w-1/5 py-4'>
          <img className="h-50" src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/illustration-2.svg" />
        </div>
      </div>
    </div>
  )
}

export default Footer