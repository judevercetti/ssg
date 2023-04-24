import React from 'react'
import Navbar from '../Component/Navbar'
import { Footer } from '../Component/Footer'
import BlogListCard2 from '../Component/BlogListCard2'
import { Link } from '@inertiajs/inertia-react'

function CategoryScreen({blogs, category}) {
  return (
    <div>
        <Navbar/>

        <div className='container mx-auto flex flex-wrap py-6'>

        <section class="w-full md:w-2/3 flex flex-col items-center px-3">
        <div className='w-full justify-start mb-5' >
                        <h1 class="ml-6  w-full mb-2 mt-5 text-2xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-3xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-black from-yellow-500">{category}</span></h1>
                        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-5">
                       
                           

                            {
                                            blogs && blogs.map((blog, index) => 

                                                <Link key={index} href={"/blog/" + blog.slug}>
                                                    <BlogListCard2 title={blog.title} content={blog.discription} time={blog.updated_at} image={blog.imageurl}/>
                                                    
                                                </Link>

                                            )}
                            


                        </div>

                    </div>
            </section>

            <aside class="w-full md:w-1/3 flex flex-col items-center px-3">
             
            </aside>
            </div>
            <Footer/>
        </div>
  )
}

export default CategoryScreen