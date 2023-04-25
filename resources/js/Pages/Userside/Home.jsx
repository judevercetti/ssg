import React, { useState } from 'react'
import Navbar from '../Component/Navbar';
import { Footer } from '../Component/Footer'
import BlogListCard from '../Component/BlogListCard';
import BlogListCard2 from '../Component/BlogListCard2';
import BlogAsideCard from '../Component/BlogAsideCard';
import { Link } from '@inertiajs/inertia-react';


function Home({ latest, latests, blog, blog_category, trending_posts }) {
    return (
        <div>
            <Navbar />

            <section className="flex justify-between items-center bg-black p-10">
                <div className='w-2/3'>
                    <img src={latest.imageurl} className="h-96 w-full object-cover" />
                </div>
                <div className="flex-1 space-y-4 lg:ml-10 sm:text-center lg:text-left">
                    <h1 className="text-2xl font-bold text-yellow-500">
                        {latest.title}
                    </h1>
                    <p className="max-w-xl leading-relaxed text-gray-300 sm:mx-auto lg:ml-0">
                        {latest.description}
                    </p>
                    <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <Link
                            href={"/blog/" + latest.slug}
                            className="block px-6 py-2 text-center text-white bg-yellow-600 hover:bg-yellow-700 rounded-md"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </section>

            <div id='whole-page' className='container mx-auto flex flex-wrap py-6'>
                <section id='left' className='w-full md:w-2/3 flex flex-col items-center px-3 divide-y-2 divide-yellow-200'>
                    <div className='w-full justify-start mb-5' >
                        <h1 className="ml-6  w-full mb-2 mt-5 text-2xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-3xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-black from-yellow-500">Latest</span></h1>
                        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-5">
                            {latests && latests.map((latest, index) =>
                                <Link key={index} href={"/blog/" + latest.slug}>
                                    <BlogListCard2 title={latest.title} content={latest.description} time={latest.updated_at} image={latest.imageurl} />

                                </Link>
                            )}
                        </div>
                    </div>

                    <div className='w-full justify-start'>
                        {blog_category &&
                            blog_category.map((category, index) => <div key={index}>
                                {category.blog.length == 0 ? <></> : <>
                                    <h1 className="ml-6 w-full mb-2 my-10 text-2xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-3xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-black from-yellow-500">  {category.name}</span></h1>
                                    {category.blog.map((blogs, index) =>
                                        <Link key={index} href={"/blog/" + blogs.slug}>

                                            <BlogListCard key={blogs.id} image={blogs.imageurl} title={blogs.title} description={blogs.description} time={blogs.created_at} />
                                        </Link>
                                    )}

                                    <div>
                                        <Link href={"/category/" +
                                            category.name} type="submit" className="m-2 p-2 mt-5 text-sm font-medium text-white bg-gradient-to-r to-black from-yellow-500  focus:ring-4 focus:outline-none">
                                            {"More " + category.name}
                                        </Link>
                                    </div>
                                </>}
                            </div>
                            )}
                    </div>
                </section>
                
                <aside id='right' className='w-full md:w-1/3 flex flex-col items-center px-3'>
                    <h1 className="ml-6 w-full mb-2 mt-5 text-sm font-extrabold text-gray-900 dark:text-white md:text-xs lg:text-sm"><span className="text-transparent bg-clip-text bg-gradient-to-r to-black from-yellow-500">Trending Posts</span></h1>
                    {trending_posts && trending_posts.map((post, index) =>
                        <BlogAsideCard key={index}
                            image={post.imageurl}
                            title={post.title}
                            time={post.created_at} />
                    )}

                    <div className="text-sm py-6 sticky top-20">
                        <div className="w-full text-center">
                            {/* <Adsense
                                client='ca-pub-2005682797531342'
                                slot='7046626912'
                                adTest='on'
                                style={{ display: 'block' }}
                                format='auto'
                                responsive='true'
                                layoutKey='-gw-1+2a-9x+5c'
                            /> */}
                            <a className="uppercase mt-5" href="#">Advertisement</a>
                            <a href="#">
                                <img className="mx-auto" src="/images/ads/250.jpg" alt="advertisement area" />
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
            <Footer />
        </div>
    );
}

export default Home