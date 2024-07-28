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
import PlainPostCard from './Component/PlainPostCard';
import PostSmallCard from './Component/PostSmallCard';
import PlainPostCard2 from './Component/PlainPostCard2';
import PostTinyCard from './Component/PostTinyCard';

function Home({ latest, latests, blog, blog_category, trending_posts, national_posts, editorial_posts, world_news_posts, regional_posts, politics_posts, africa_posts }) {
    const nationalTopRowPosts = national_posts.slice(0, 3);
    const nationalBottomRowPosts = national_posts.slice(3);

    return (
        <>
            <section className="bg-gray-50 p-2 lg:p-10">
                <div className='container mx-auto flex flex-col-reverse lg:flex-row gap-5 justify-between items-center'>
                    <div className='w-full lg:w-1/3 text-gray-800'>
                        <h2 className='text-lg font-bold text-primary'>Latest &nbsp;News</h2>
                        {latests && latests.map((post, index) =>
                            <Link key={index} href={'/' + post.slug}>
                                <VideoListCard post={post} />
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
                        <h2 className="mb-2 mt-5 text-lg font-extrabold text-gray-900 dark:text-white"><Link href='/category/national' className="text-transparent bg-clip-text bg-primary hover:underline decoration-primary">National</Link></h2>
                        <div className="grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-5">
                            {nationalTopRowPosts && nationalTopRowPosts.map((post, index) =>
                                <Link key={index} href={"/" + post.slug}>
                                    <BlogListCard2 post={post} />
                                </Link>
                            )}
                        </div>
                        {<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 md:gap-x-5 gap-y-3 mt-5">
                            <div className="flex flex-col border border-gray-300 rounded px-2 pt-3">
                                {nationalBottomRowPosts[0] && <PostTinyCard post={nationalBottomRowPosts[0]} />}
                                {nationalBottomRowPosts[3] && <PostTinyCard post={nationalBottomRowPosts[3]} />}
                                {nationalBottomRowPosts[6] && <PostTinyCard post={nationalBottomRowPosts[6]} />}
                                {nationalBottomRowPosts[9] && <PostTinyCard post={nationalBottomRowPosts[9]} />}
                            </div>
                            <div className="flex flex-col border border-gray-300 rounded px-2 pt-3">
                                {nationalBottomRowPosts[1] && <PostTinyCard post={nationalBottomRowPosts[1]} />}
                                {nationalBottomRowPosts[4] && <PostTinyCard post={nationalBottomRowPosts[4]} />}
                                {nationalBottomRowPosts[7] && <PostTinyCard post={nationalBottomRowPosts[7]} />}
                                {nationalBottomRowPosts[10] && <PostTinyCard post={nationalBottomRowPosts[10]} />}
                            </div>
                            <div className="flex flex-col border border-gray-300 rounded px-2 pt-3">
                                {nationalBottomRowPosts[2] && <PostTinyCard post={nationalBottomRowPosts[2]} />}
                                {nationalBottomRowPosts[5] && <PostTinyCard post={nationalBottomRowPosts[5]} />}
                                {nationalBottomRowPosts[8] && <PostTinyCard post={nationalBottomRowPosts[8]} />}
                                {nationalBottomRowPosts[11] && <PostTinyCard post={nationalBottomRowPosts[11]} />}
                            </div>
                        </div>}
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
                                    time={post.created_at} number={index + 1} />
                            </Link>
                        )}
                    </div>
                </aside>
            </div>

            {politics_posts && politics_posts.length > 0 &&
                <div className='container mx-auto px-5 md:px-0'>
                    <h2 className="mb-2 mt-5 text-lg font-extrabold text-gray-900 dark:text-white">
                        <Link href='/category/politics' className="text-transparent bg-clip-text bg-primary hover:underline decoration-primary">
                            Politics
                        </Link>
                    </h2>
                    <div className="grid grid-cols-1 md:gap-x-10 sm:grid-cols-3 lg:grid-cols-4">
                        <Link href={'/' + world_news_posts[0].slug}>
                            <BlogListCard2 post={politics_posts[0]} square />
                        </Link>
                        <div className="col-span-2 flex flex-col md:divide-y gap-2">
                            {latests && latests.slice(1).map((post, index) =>
                                <Link key={index} href={'/' + post.slug}>
                                    <PostSmallCard post={post} />
                                </Link>
                            )}
                        </div>
                        <div>
                            <AdsComponent dataAdSlot='6063218924' />
                        </div>
                    </div>
                </div>
            }

            {editorial_posts && editorial_posts.length > 0 &&
                <div id='whole-page' className='container mx-auto flex flex-wrap'>
                    <section id='left' className='w-full md:w-2/3 flex flex-col items-center'>
                        <div className='w-full justify-start mb-5'>
                            <h2 className="mb-2 mt-5 text-lg font-extrabold text-gray-900 dark:text-white">
                                <Link href='/category/editorial' className="text-transparent bg-clip-text bg-primary hover:underline decoration-primary">
                                    Editorial
                                </Link>
                            </h2>
                            <div className="grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-5">
                                {editorial_posts && editorial_posts.map((post, index) =>
                                    <Link key={index} href={"/" + post.slug}>
                                        <BlogListCard2 post={post} />
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
                    </aside>
                </div>
            }

            {regional_posts && regional_posts.length > 0 &&
                <div className='container mx-auto px-5 md:px-0'>
                    <h2 className="mb-2 mt-5 text-lg font-extrabold text-gray-900 dark:text-white">
                        <Link href='/category/regional' className="text-transparent bg-clip-text bg-primary hover:underline decoration-primary">
                            Regional
                        </Link>
                    </h2>
                    <div className="grid grid-cols-1 md:gap-x-10 sm:grid-cols-3 lg:grid-cols-4">
                        <div className="col-span-2" >
                            {regional_posts[0] && <Link href={'/' + regional_posts[0].slug}>
                                <BlogListCard2 post={regional_posts[0]} />
                            </Link>}
                        </div>
                        <div className="flex flex-col divide-y gap-2">
                            {regional_posts[1] && <PlainPostCard post={regional_posts[1]} showImage={true} />}
                            {regional_posts[2] && <PlainPostCard post={regional_posts[2]} />}
                            {regional_posts[3] && <PlainPostCard post={regional_posts[3]} />}
                        </div>
                        <div className="flex flex-col divide-y gap-2">
                            {regional_posts[4] && <PlainPostCard post={regional_posts[4]} showImage={true} />}
                            {regional_posts[5] && <PlainPostCard post={regional_posts[5]} />}
                            {regional_posts[6] && <PlainPostCard post={regional_posts[6]} />}
                        </div>
                    </div>
                </div>
            }

            {africa_posts && africa_posts.length > 0 &&
                <div className='container mx-auto px-5 md:px-0'>
                    <h2 className="mb-2 mt-5 text-lg font-extrabold text-gray-900 dark:text-white">
                        <Link href='/category/africa' className="text-transparent bg-clip-text bg-primary hover:underline decoration-primary">
                            Africa
                        </Link>
                    </h2>
                    <div className="grid grid-cols-1 md:gap-10 sm:grid-cols-3 lg:grid-cols-4">
                        <Link href={'/' + world_news_posts[0].slug}>
                            <BlogListCard2 post={africa_posts[0]} square />
                        </Link>
                        <div className="col-span-2 flex flex-col md:divide-y gap-2">
                            {latests && latests.slice(1).map((post, index) =>
                                <Link key={index} href={'/' + post.slug}>
                                    <PostSmallCard post={post} />
                                </Link>
                            )}
                        </div>
                        <div className="w-full">
                            <AdsComponent dataAdSlot='6063218924' />
                        </div>
                    </div>
                </div>
            }

            {world_news_posts && world_news_posts.length > 0 &&
                <div className='container mx-auto px-5 md:px-0'>
                    <h2 className="mb-2 mt-5 text-lg font-extrabold text-gray-900 dark:text-white">
                        <Link href='/category/world' className="text-transparent bg-clip-text bg-primary hover:underline decoration-primary">
                            World
                        </Link>
                    </h2>
                    <div className="grid grid-cols-1 md:gap-10 sm:grid-cols-3 lg:grid-cols-3">
                        <div className="" >
                            {world_news_posts[0] && <Link href={'/' + world_news_posts[0].slug}>
                                <BlogListCard2 post={world_news_posts[0]} square />
                            </Link>}
                        </div>
                        <div className="flex flex-col divide-y gap-2">
                            {world_news_posts[1] && <PlainPostCard post={world_news_posts[1]} showImage={true} />}
                            {world_news_posts[2] && <PlainPostCard2 post={world_news_posts[2]} />}
                            {world_news_posts[3] && <PlainPostCard2 post={world_news_posts[3]} />}
                        </div>
                        <div className="flex flex-col divide-y gap-2">
                            {world_news_posts[4] && <PlainPostCard post={world_news_posts[4]} showImage={true} />}
                            {world_news_posts[5] && <PlainPostCard2 post={world_news_posts[5]} />}
                            {world_news_posts[6] && <PlainPostCard2 post={world_news_posts[6]} />}
                        </div>
                    </div>
                </div>
            }

            <div id='whole-page' className='container mx-auto flex flex-col md:flex-row pb-6'>
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
            <Link href={'/category/' + item.slug} className="text-transparent bg-clip-text bg-primary hover:underline decoration-primary">
                {item.name}
            </Link>
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