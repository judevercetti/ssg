import React from 'react'

export default function PostSmallCard({ post: { imageurl, title, created_at, description } }) {

    return (
        <div>
            <div className="py-2">
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-2">
                    <div className="w-full lg:w-auto">
                        <img className="block w-full md:w-32 aspect-auto md:aspect-square object-cover" src={'/' + imageurl} alt="" />
                    </div>
                    <div className="w-full lg:w-9/12">
                        <div className="max-w-2xl">
                            <h3 className="text-base font-semibold line-clamp-2 hover:underline">{title}</h3>
                            <p className="mb-1 leading-normal text-gray-500 line-clamp-2">
                                {description}
                            </p>
                            <span className="block text-xs text-gray-400 mt-1 underline">{new Date(created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
