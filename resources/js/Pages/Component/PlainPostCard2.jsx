import React from 'react'
import { Link } from '@inertiajs/inertia-react';

function PlainPostCard2({ post: { title, description, imageurl, updated_at, slug }, showImage = true }) {
  return (
    <Link href={'/' + slug}>
      <div className="w-full flex gap-2 items-center" >
        <h3 className="text-base font-bold mb-1 line-clamp-3 my-2 hover:underline cursor-pointer">
          {title}
        </h3>
        {showImage && <img src={'/' + imageurl} alt="image" className="object-cover h-24 aspect-square mt-2 rounded" />}
      </div>
    </Link>
  )
}

export default PlainPostCard2