import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import { Footer } from '../Component/Footer'
import parse from 'html-react-parser'
import BlogAsideCard from '../Component/BlogAsideCard'
import { Link, usePage } from '@inertiajs/inertia-react'
import { Tooltip } from "@material-tailwind/react";
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";

function ArticleScreen({ blog, category, latests, category_name }) {
    const currentUrl = location.href;
    const [copied, setCopied] = useState(false)

    const copyLink = () => {
        navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <div>
            <Navbar />
            <div className='container mx-auto flex flex-wrap py-6'>
                <section className="w-full md:w-2/3 flex flex-col items-center px-3">
                    <article className="flex flex-col shadow my-4">

                        <div>
                            <img src={'/' + blog.imageurl} />
                        </div>
                        <div className="bg-white flex flex-col justify-start p-6">
                            <div className="text-yellow-600 text-sm font-bold uppercase pb-4">{category_name.name}</div>
                            <div className="text-3xl font-bold hover:text-gray-700 pb-4">{blog.title}</div>
                            <div className="text-sm pb-3">
                                By <div className="font-semibold hover:text-gray-800">David Grzyb</div>, Published on April 25th, 2020
                            </div>
                            <div className="pb-6 mt-5">
                                {
                                    parse(blog.content)
                                }
                            </div>

                        </div>

                        <h4 className='text-lg ml-7 font-semibold hover:text-gray-700 pb-1'>Share Post</h4>

                        <div className="border-b border-gray-200 pb-6 flex justify-between mt-2 ml-5 mr-4">
                            <WhatsappShareButton title='Check this interesting article I found: ' url={currentUrl} className='flex space-x-3 items-center'>
                                <WhatsappIcon round={true} size={30} />
                                <span>WhatsApp</span>
                            </WhatsappShareButton>

                            <TwitterShareButton title='Check this interesting article I found: ' url={currentUrl} className='flex space-x-3 items-center'>
                                <TwitterIcon round={true} size={30} />
                                <span>Twitter</span>
                            </TwitterShareButton>

                            <FacebookShareButton quote='Check this interesting article I found: ' url={currentUrl} className='flex space-x-3 items-center'>
                                <FacebookIcon round={true} size={30} />
                                <span>Facebook</span>
                            </FacebookShareButton>

                            <LinkedinShareButton title='Check this interesting article I found: '  url={currentUrl} className='flex space-x-3 items-center'>
                                <LinkedinIcon round={true} size={30} />
                                <span>LinkedIn</span>
                            </LinkedinShareButton>

                            <button onClick={copyLink} className='flex space-x-3 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                                </svg>
                                <span>{copied ? 'Copied' : 'Copy link'}</span>
                            </button>
                        </div>
                    </article>
                </section>

                <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
                    <div>

                        <h1 className="ml-6 w-full mb-2 mt-5 text-sm font-extrabold text-gray-900 dark:text-white md:text-xs lg:text-sm"><span className="text-transparent bg-clip-text bg-gradient-to-r to-black from-yellow-500">Similar Posts</span></h1>
                        {
                            category && category.map((blog, index) =>

                                <Link key={index} href={"/blog/" + blog.slug}>

                                    {/* <BlogListCard key={blog.id} image={blogs.imageurl} title={blogs.title} description={blogs.description} time={blogs.created_at} /> */}
                                    <BlogAsideCard
                                        key={blog.id}
                                        image={blog.imageurl}
                                        title={blog.title}
                                        time={blog.created_at}
                                    />

                                </Link>

                            )}

                    </div>

                    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                        <h1 className="ml-2 w-full mb-2 mt-5 text-md font-extrabold text-gray-900 dark:text-white md:text-xs lg:text-2xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-black from-yellow-500">Latest Posts</span></h1>
                        <div className="grid grid-cols-3 gap-3">
                            {
                                latests && latests.map((latest, index) =>

                                    <Link key={index} href={"/blog/" + latest.slug}>
                                        <Tooltip content={latest.title} animate={{
                                            mount: { scale: 1, y: 0 },
                                            unmount: { scale: 0, y: 25 },
                                        }} placement="bottom-end">

                                            <img className="hover:opacity-75 h-28 w-28 object-cover" src={'/' + latest.imageurl} />
                                        </Tooltip>


                                    </Link>

                                )}



                        </div>
                        <a href="#" className="w-full bg-yellow-500 text-white font-bold text-sm uppercase rounded hover:bg-yellow-700 flex items-center justify-center px-2 py-3 mt-6">
                            Subscribe
                        </a>
                    </div>
                </aside>
            </div>
            <Footer />
        </div>

    )
}

export default ArticleScreen