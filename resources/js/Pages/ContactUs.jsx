import React from 'react'
import Layout from './Component/Layout'

function ContactUs() {
    return (
        <div className='container max-w-screen-xl mx-auto flex flex-col md:flex-row py-16'>
            <div className='md:w-1/2 px-5'>
                <h1 className='text-2xl font-semibold'>CONTACT US</h1>
                <div className='flex flex-col space-y-3 border-t-2 pt-5'>
                </div>
            </div>
        </div>
    )
}

ContactUs.layout = page => <Layout children={page} />
export default ContactUs