import React from 'react'

function CommentCard({commenterName, commentDetails, userimage}) {
  return (
    <div>
        <div  className="flex items-center space-x-4 mb-5">
                    <div  className="flex-shrink-0">
                        <img  className="w-8 h-8 rounded-full" src={userimage} alt="Neil image"/>
                    </div>
                    <div  className="flex-1 min-w-0">
                        <p  className="text-sm font-medium text-gray-900 truncate  ">
                            {commenterName}
                        </p>
                        <p  className="text-sm text-gray-500 ">
                            {commentDetails}
                        </p>
                    </div>
                    
                </div> 
    </div>
  )
}

export default CommentCard