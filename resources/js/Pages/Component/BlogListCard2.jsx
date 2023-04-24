import React from 'react'
import { Link } from '@inertiajs/inertia-react';

function BlogListCard2({ title, content, time, image }) {
  const date = new Date(time);
  const formattedDate = date.toLocaleDateString();

  return (
    <div>
      <div className="w-full rounded-lg shadow-md lg:max-w-sm" >
        <img
          className="object-cover w-full h-48"
          src={'/'+image}
          alt="image"
        />
        <div className="p-4">
          <h4 className="text-lg font-bold mb-1 line-clamp-2">
              {title}
            </h4>
          <p className="mb-2 leading-normal text-gray-500 line-clamp-2">
            {content}
          </p>
          <p className="text-gray-500 mb-1">
            <small>Published <u>{formattedDate}</u></small>
          </p>

        </div>
      </div>
    </div>
  )
}

export default BlogListCard2