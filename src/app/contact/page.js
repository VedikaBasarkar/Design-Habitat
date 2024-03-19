import React from 'react'
import '../../app/globals.css'

const Contact = () => {
  return (
    <div className='contact-page'>
        <div className='px-2 md:px-28 flex flex-col md:flex-row w-full pt-2 md:pt-10'>
          <div className='w-full md:w-1/2 pr-20'>
            <div className='brown-title-font'>We’d love to hear from you</div>
            <div className='py-2'>To reach to us, you can fill the form here, drop email or contact us on provided number</div>
            <div className='text-lg font-bold pb-1 text-secondary-500'>info@thedesignhabitat.com </div>
            <div className='w-full flex flex-col md:flex-row font-medium pt-4'>
              <div className='w-full md:w-1/2 pr-4'>
                <div className='text-lg font-bold pb-1'>Pune</div>
                <div className='py-1'>6120/6130 6th floor Marvel Fuego, Magarpatta road, opposite to Seasons Mall, Hadapsar, Pune 411028</div>
                <div className='py-1'>+91 788 803 3033</div>
              </div>
              <div className='w-full md:w-1/2 pr-4'>
                <div className='text-lg font-bold pb-1'>Nashik</div>
                <div className='py-1'>4th floor, Babubhai House, Above HDFC Bank, Near Kulkarni Garden, Sharanpur Road, Nashik - 422002</div>
                <div className='md:py-1 '>+91 776 803 3033</div>
              </div>
            </div>
            <div></div>
          </div>
          <div className='w-full md:w-1/2'>
            <div className="px-5 mt-2">
              <form>
              <div className=''>
                <label for="name">Name</label>
                <input
                className="block w-full textarea text-sm pb-10"
                type="text"
                name="name"
                placeholder="Enter your name"
                />
                {/* <span className="text-red-700 font-base text-xs mt-4">hello</span> */}
              </div>
              <div>
                <label for="email">Email</label>
                <input
                className="block w-full textarea text-sm"
                type="text"
                name="email"
                placeholder="Enter email address"
                />
                <span className="text-red-700 font-base text-xs mt-4"></span>
              </div>
              <div>
                <label for="contact">Contact</label>
                <input
                className="block w-full textarea text-sm"
                type="text"
                name="contact"
                placeholder="Enter contact number"
                />
                <span className="text-red-700 font-base text-xs mt-4"></span> 
              </div>
              <div>
                <label for="message">Message</label>
                <textarea className="block w-full textarea text-sm" name="postContent" rows={4} cols={40} />
                <span className="text-red-700 font-base text-xs mt-4"></span> 
              </div>
              <div>
              <button type="submit" className='buttonCSS'>Submit</button>
              </div>
            </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact