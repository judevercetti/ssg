import React from 'react'
import BlogListCard from './Component/BlogListCard';
import BlogListCard2 from './Component/BlogListCard2';
import BlogAsideCard from './Component/BlogAsideCard';
import { Link } from '@inertiajs/inertia-react';
import VideoListCard from './Component/VideoListCard';
import Layout from './Component/Layout';
import AdsComponent from './Component/AdsComponent';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import InfinityList from './InfinityList';

function Home({ latest, latests, blog, blog_category, trending_posts, editorial_posts }) {
    return (
        <>
            <section className="bg-gray-50 p-2 lg:p-10">
                <div className='container mx-auto flex flex-col lg:flex-row lg:space-x-5 justify-between items-center'>
                    <div className='hidden md:block w-full lg:w-1/3 text-gray-800'>
                        <h2 className='text-lg font-bold text-primary'>Latest &nbsp;News</h2>
                        {latests && latests.map((post, index) =>
                            <Link key={index} href={'/' + post.slug}>
                                <VideoListCard image={post.imageurl} title={post.title} time={post.created_at} />
                            </Link>
                        )}
                        <Link href='/search' className='flex space-x-2 items-center font-semibold text-base text-primary float-right hover:underline'>
                            <span>See more news</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 animate-pulse">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </Link>
                    </div>
                    <Splide options={{ autoplay: true, arrows: false, type: 'loop', interval: 6000, pagination: false }} className='w-full lg:w-2/3'>
                        {latests && latests.map((latest, index) =>
                            <SplideSlide key={index} className='flex flex-col lg:flex-row lg:space-x-5 justify-between items-center md:px-1'>
                                <div className="w-full lg:flex-1 ">
                                    <Link href={"/" + latest.slug} title={latest.title}>
                                        <img src={latest.imageurl} alt={latest.title} className="h-72 lg:h-96 w-full object-cover" />
                                    </Link>
                                </div>
                                <div className="lg:flex-1 space-y-4 mt-2 sm:text-center text-left">
                                    <h1 className="text-xl lg:text-2xl font-bold text-primary hover:underline text-left line-clamp-4">
                                        <Link href={"/" + latest.slug}>{latest.title}</Link>
                                    </h1>
                                    <p className="max-w-xl text-lg leading-relaxed text-gray-800 sm:mx-auto lg:ml-0 text-left line-clamp-5">
                                        {latest.description}
                                    </p>
                                    <Link href={"/" + latest.slug} title={latest.title} className="block text-primary rounded-md hover:underline text-left">
                                        Read more
                                    </Link>
                                    <span className="block text-xs text-gray-400 mt-1 text-left underline">{new Date(latest.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                </div>
                            </SplideSlide>
                        )}
                    </Splide>
                </div>
            </section>

            <div id='whole-page' className='container mx-auto flex flex-wrap pb-6'>
                <section id='left' className='w-full md:w-2/3 flex flex-col items-center px-3 divide-y-2 divide-yellow-200'>
                    <div className='w-full justify-start mb-5'>
                        <h2 className="mb-2 mt-5 text-lg font-extrabold text-gray-900 dark:text-white"><span className="text-transparent bg-clip-text bg-primary">Editorial</span></h2>
                        <div className="grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-5">
                            {editorial_posts && editorial_posts.map((post, index) =>
                                <Link key={index} href={"/" + post.slug}>
                                    <BlogListCard2 title={post.title} content={post.description} time={post.updated_at} image={post.imageurl} />
                                </Link>
                            )}
                        </div>
                    </div>

                    <div className='w-full'>
                        <AdsComponent dataAdSlot='6063218924' />
                    </div>
                </section>

                <aside id='right' className='w-full md:w-1/3 flex flex-col items-center px-3'>
                    <div className='w-full'>
                        <AdsComponent dataAdSlot='6063218924' />
                    </div>

                    <div className='sticky top-32'>
                        <h2 className="mb-2 mt-5 text-sm font-extrabold text-gray-900 dark:text-white md:text-xs lg:text-base">
                            <span className="text-transparent bg-clip-text bg-primary">
                                Most Popular
                            </span>
                        </h2>
                        {trending_posts && trending_posts.map((post, index) =>
                            <Link key={index} href={'/' + post.slug} >
                                <BlogAsideCard
                                    image={post.imageurl}
                                    title={post.title}
                                    time={post.created_at} />
                            </Link>
                        )}
                    </div>

                    {/* <div className="text-sm py-6 sticky top-20">
                        <div className="w-full text-center">
                            <Adsense
                                client='ca-pub-2005682797531342'
                                slot='7046626912'
                                adTest='on'
                                style={{ display: 'block' }}
                                format='auto'
                                responsive='true'
                                layoutKey='-gw-1+2a-9x+5c'
                            />
                            <a className="uppercase mt-5" href="#">Advertisement</a>
                            <a href="#">
                                <img className="mx-auto" src="/images/ads/250.jpg" alt="advertisement area" />
                            </a>
                        </div>
                    </div> */}
                </aside>
            </div>

            <div id='whole-page' className='container mx-auto flex pb-6'>
                <section id='left' className='w-full md:w-2/3 flex flex-col items-center px-3 divide-y-2 divide-yellow-200'>
                    <div className='w-full justify-start'>
                        <InfinityList defaultItems={blog_category} Widget={BlogList} />
                    </div>
                </section>

                <aside id='right' className='w-full md:w-1/3 flex flex-col items-center px-3'>
                    <div className='w-full sticky top-40'>
                        <AdsComponent dataAdSlot='6063218924' />
                    </div>
                </aside>
            </div>
        </>
    );
}

function BlogList({ item }) {
    return item.two_blog.length == 0 ? <></> : <div className="divide-y-2 divide-yellow-200">
        <h2 className="mb-2 my-10 text-lg font-extrabold text-gray-900 dark:text-white">
            <span className="text-transparent bg-clip-text bg-primary">
                {item.name}
            </span>
        </h2>
        {item.two_blog.map((blogs, index) =>
            <Link key={index} href={"/" + blogs.slug}>
                <BlogListCard key={blogs.id} image={blogs.imageurl} title={blogs.title} description={blogs.description} time={blogs.created_at} />
            </Link>
        )}

        <Link href={"/category/" + item.slug} type="submit" className="p-2 text-sm font-medium text-white bg-primary">
            {"More " + item.name}
        </Link>

        <div className='w-full mt-5'>
            <AdsComponent dataAdSlot='6063218924' />
        </div>
    </div>
}


Home.layout = page => <Layout children={page} />
export default Home