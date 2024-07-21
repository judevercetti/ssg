import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function PostTinyCard({ post: { imageurl, title, created_at, description, slug } }) {

    return (
        <Link href={"/" + slug}>
            <div className="py-2">
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-2">
                    <div className="w-full lg:w-auto">
                        <img className="block w-full md:w-16 aspect-auto md:aspect-square object-cover rounded" src={'/' + imageurl} alt="" />
                    </div>
                    <div className="w-full lg:w-9/12">
                        <div className="max-w-2xl">
                            <h3 className="text-sm line-clamp-2 hover:underline">{title}</h3>
                            <span className="block text-xs text-gray-400 mt-1 underline">{new Date(created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
