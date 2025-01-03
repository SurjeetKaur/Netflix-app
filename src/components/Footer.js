import React from 'react'


function Footer() {
  return (
    <div className='bg-black justify-center py-12 text-white  flex flex-col flex-wrap w-full z-10 relative'>
      <div className='flex flex-col flex-wrap justify-center items-center w-full'>
        <h3 className='text-center text-red-600 text-2xl'>Get In Touch</h3>
        <p className='text-center pt-2'>Email: <a href="mailto:surjeetkaur961@gmail.com" class="hover:underline">surjeetkaur961@gmail.com</a></p>
      </div> 
      <div class="flex  flex-row space-x-4 mt-4 justify-center">
        <a href="#" target="_blank" className="hover:text-gray-400 text-2xl">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="#" target="_blank" className="hover:text-gray-400 text-2xl">
          <i className="fa fa-github"></i>
        </a>
      </div>
      <div className='flex justify-center pt-4'>
        <p>© 2025 Surjeet Kaur. All rights reserved.</p>
      </div> 
    </div>
  )
}

export default Footer