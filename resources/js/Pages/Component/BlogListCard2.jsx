import React from 'react'
import { Link } from '@inertiajs/inertia-react';

function BlogListCard2({ post: { title, description, imageurl, updated_at }, square = false}) {
  return (
    <div>
      <div className="w-full rounded-lg" >
        <img
          className={`w-full ${square ? 'aspect-square' : 'aspect-auto'} object-cover rounded-md`}
          src={'/' + imageurl}
          alt="image"
        />
        <div className="p-1">
          <h3 className="text-lg font-bold mb-1 line-clamp-2 hover:underline">
            {title}
          </h3>
          <p className="mb-1 leading-normal text-gray-500 line-clamp-2">
            {description}
          </p>
          <p className="text-gray-500 mb-1">
            <small><u>{new Date(updated_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</u></small>
          </p>

        </div>
      </div>
    </div>
  )
}

export default BlogListCard2