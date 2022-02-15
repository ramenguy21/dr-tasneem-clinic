import React from 'react'
import { Footer } from './footer'

const Layout = ({children}) => {
    return(
        <div className='bg-white'>
            <div className='bg-blue text-white flex justify-between p-5'>
                <h1>Dr Tasneem's Clinic</h1>
                <div className='flex flex-row pr-5'>
                    <a href="/" className='px-3'>Home</a>
                    <a href="/about-us" className='px-3'>About Us</a>
                    <a href="/contact-us" className='px-3'>Contact Us</a>
                </div>
            </div>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout