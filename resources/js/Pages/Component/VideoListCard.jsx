import React from 'react'

export default function VideoListCard({ post: { imageurl, title, created_at } }) {

    return (
        <div>
            <div className="py-2">
                <div className="flex items-center">
                    <img className="block w-32 aspect-video object-cover" src={'/' + imageurl} alt="" />
                    <div className="w-full lg:w-9/12 mx-2">
                        <h3 className="text-sm font-semibold line-clamp-2 hover:underline">{title}</h3>
                        <span className="block text-xs text-gray-400 mt-1 underline">{new Date(created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
