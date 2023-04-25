import React from 'react'

function BlogAsideCard({ title, time, image }) {

    return (
        <div>
            <div className="py-2 border-t-2 border-gray-100">
                <div className="flex flex-wrap lg:flex-nowrap items-center">
                    <div className="w-full lg:w-auto mr-2 mb-8 lg:mb-0">
                        <img className="block w-40 h-20 object-cover" src={'/' + image} alt="" />
                    </div>
                    <div className="w-full lg:w-9/12 mr-2 mb-10 lg:mb-0">
                        <div className="max-w-2xl">
                            <span className="block text-xs text-gray-400 mb-1">{new Date(time).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                            <p className="text-sm font-semibold text-gray-900">{title}</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-auto px-4 ml-auto text-right">
                        <div className="flex space-x-1 items-center text-xs font-semibold text-orange-900 hover:text-gray-900" href="#">
                            <span className="mr-1">Read</span>
                            <svg className="animate-bounce -z-50 w-2 h-2" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.33301 14.6668L14.6663 1.3335" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M1.33301 1.3335H14.6663V14.6668" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogAsideCard