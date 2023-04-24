import React from 'react'

function BlogAsideCard({title, time,image}) {
  const date = new Date(time);
  const formattedDate = date.toLocaleDateString();

  return (
    <div>
        <div className="py-2 border-t-2 border-gray-100">
                        <div className="flex flex-wrap lg:flex-nowrap items-center">
                            <div className="w-full lg:w-auto px-4 mb-8 lg:mb-0">
                                <img className="block w-44 h-30" src={'/'+image} alt="" />
                            </div>
                            <div className="w-full lg:w-9/12 px-4 mb-10 lg:mb-0">
                                <div className="max-w-2xl">
                          <span className="block text-sm text-gray-400 mb-1">{formattedDate}</span>
                                    <p className="text-xs font-semibold text-gray-900">{title}</p>
                                </div>
                            </div>
                            <div className="w-full lg:w-auto px-4 ml-auto text-right">
                                <div className="inline-flex items-center text-xs font-semibold text-orange-900 hover:text-gray-900" href="#">
                                    <span className="mr-1">Read</span>
                                    <svg className="animate-bounce w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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