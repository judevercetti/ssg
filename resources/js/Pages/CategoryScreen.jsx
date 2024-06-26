import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import Layout from './Component/Layout'
import BlogListCard from './Component/BlogListCard'
import BlogAsideCard from './Component/BlogAsideCard'
import AdsComponent from './Component/AdsComponent';

function CategoryScreen({ blogs, category, trending_posts }) {
    return (
        <div>
            <div className='container mx-auto flex flex-wrap py-6'>

                <section className="w-full md:w-2/3 flex flex-col items-center px-3">
                    <div className='w-full justify-start mb-5' >
                        <h2 className="mb-4 mt-5 text-2xl font-extrabold text-gray-900 dark:text-white"><span className="text-transparent bg-clip-text bg-primary">{category}</span></h2>
                        {blogs && blogs.map((blog, index) =>
                            <Link key={index} href={"/" + blog.slug}>
                                <BlogListCard title={blog.title} description={blog.description} time={blog.updated_at} image={blog.imageurl} />
                            </Link>
                        )}

                        {blogs && blogs.length == 0 &&
                            <div className='flex items-center text-center font-semibold text-lg w-full bg-gray-100 p-10'>
                                <span className='mx-auto'>
                                    No posts found in this category
                                </span>
                            </div>
                        }

                        <div className='w-full'>
                            <AdsComponent dataAdSlot='6063218924' />
                        </div>
                    </div>
                </section>

                <aside className="w-full md:w-1/3 flex flex-col items-center px-3">

                    <div className='w-full'>
                        <AdsComponent dataAdSlot='6063218924' />
                    </div>

                    <div className='sticky top-32'>
                        <h2 className="mb-2 mt-5 text-sm font-extrabold text-gray-900 dark:text-white md:text-xs lg:text-base"><span className="text-transparent bg-clip-text bg-primary">Most Popular</span></h2>
                        {trending_posts && trending_posts.map((post, index) =>
                            <Link key={index} href={'/' + post.slug}>
                                <BlogAsideCard key={index}
                                    image={post.imageurl}
                                    title={post.title}
                                    time={post.created_at} />
                            </Link>
                        )}
                    </div>
                </aside>
            </div>
        </div>
    )
}

CategoryScreen.layout = page => <Layout children={page} />
export default CategoryScreen