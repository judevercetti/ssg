import React from 'react'
import { Link } from '@inertiajs/inertia-react';

function PlainPostCard({ post: { title, description, imageurl, updated_at, slug }, showImage = false }) {
  return (
    <Link href={'/' + slug}>
      <div className="w-full" >
        {showImage && <img src={'/' + imageurl} alt="image" className="object-cover w-full aspect-video rounded-md" />}
        <h3 className="text-base font-bold mb-1 line-clamp-3 my-2 hover:underline cursor-pointer">
          {title}
        </h3>
      </div>
    </Link>
  )
}

export default PlainPostCard