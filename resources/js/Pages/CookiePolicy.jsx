import React from 'react'
import Layout from './Component/Layout'

function CookiePolicy() {
    return (
        <div className='container max-w-screen-md mx-auto flex flex-col md:flex-row py-16'>
            <div className='px-5 mx-auto'>
                <h1 className='text-2xl font-semibold'>COOKIE POLICY</h1>
                <div className='flex flex-col space-y-3 border-t-2 pt-5'>
                    <p>We use cookies to improve your online experience. At any time, you can go to settings in your browser and manage your cookies settings.</p>
                </div>
            </div>
        </div>
    )
}

CookiePolicy.layout = page => <Layout children={page} />
export default CookiePolicy