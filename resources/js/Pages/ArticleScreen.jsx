import React, { useState } from 'react'
import parse from 'html-react-parser'
import BlogAsideCard from './Component/BlogAsideCard'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Head, Link, useForm, usePage } from '@inertiajs/inertia-react'
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CommentCard from './Component/CommentCard'
import Layout from './Component/Layout'
import ReactGA from 'react-ga4';
import AdsComponent from './Component/AdsComponent';
import moment from 'moment';

// import { Adsense } from '@ctrl/react-adsense';


function ArticleScreen({ blog, category, latests, category_name, comments }) {
    const currentUrl = location.href;
    const [copied, setCopied] = useState(false)
    const commentForm = useForm({ 'blog_id': blog.id });
    const { auth } = usePage().props;

    const copyLink = () => {
        navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!auth.user) {
            toast.error('Login to comment on this article');
            return;
        }

        commentForm.post(`comment`, {
            preserveScroll: true,
            onSuccess: () => {
                commentForm.setData('body', '');
                toast.success('Comment Sent');

                if (process.env.NODE_ENV === 'production') {
                    ReactGA.event({
                        category: 'Comment',
                        action: 'Submit',
                        label: 'Comment Submitted',
                    });
                }
            }
        })
    };

    return (
        <div>
            <Head>
                <title>{blog.title}</title>
            </Head>
            <div className='container mx-auto flex flex-wrap py-6'>
                <section className="w-full md:w-2/3 flex flex-col items-center md:px-3">
                    <article className="flex flex-col shadow my-2 md:my-4">

                        <div className="bg-white flex flex-col justify-start px-3 md:px-5">
                            <h1 className="text-3xl font-bold pb-4">{blog.title}</h1>
                            <div className="text-primary text-sm font-bold uppercase pb-4">{category_name.name}</div>
                            <div className="text-sm pb-3">
                                {!['regional', 'africa', 'world'].includes(category_name.slug) && <>
                                    By <span className="font-semibold hover:text-gray-800">{blog.user.name}</span>, <br />
                                </>}
                                {/* Published on {new Date(blog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} */}
                                {/* Published on {formatDate(blog.created_at)} */}
                                <div className='flex space-x-5 mt-2'>
                                    <span className='flex items-center space-x-2 bg-gray-200 text-xs rounded py-1 px-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>{formatDate(blog.created_at)}</span>
                                    </span>
                                    <span className='flex items-center space-x-2 bg-gray-200 text-xs rounded py-1 px-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                        </svg>
                                        <span>{blog.reading_time}</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='py-5 text-center'>
                            <img src={'/' + blog.imageurl} className='w-full' alt={blog.title} />
                            <span className='px-2 text-sm italic text-gray-600 break-all'>{blog.image_description ?? 'no description'}</span>
                        </div>

                        <div className="pb-6 px-3 md:px-5 my-5">
                            {/* {blog.content} */}
                            {parse(blog.content)}
                            {/* <CKEditor
                                editor={ClassicEditor}
                                data={blog.content}
                                disabled={true}
                                config={{ toolbar: [], readOnly: true }}
                                style={{ border: 'none', boxShadow: 'none' }}
                            /> */}
                            {/* <div dangerouslySetInnerHTML={{ __html: blog.content }} /> */}
                        </div>


                        <div className='w-full mb-10'>
                            <AdsComponent dataAdSlot='6063218924' />
                        </div>

                        <h4 className='text-lg ml-7 font-semibold hover:text-gray-700 pb-2'>Share Post</h4>

                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-2 px-3">
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

                            <LinkedinShareButton title='Check this interesting article I found: ' url={currentUrl} className='flex space-x-3 items-center'>
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

                        <div className="w-full  p-4 mt-5 bg-white border rounded-lg shadow-md sm:p-8">
                            <div className="flex items-center justify-between mb-4">
                                <h5 className="text-xl font-bold leading-none text-gray-900 ">
                                    {comments && comments.length} Comments
                                </h5>
                            </div>

                            <form className="mb-6" onSubmit={handleSubmit}>
                                <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
                                    <label htmlFor="comment" className="sr-only">Your comment</label>
                                    <textarea id="comment" rows="3" value={commentForm.body} onChange={(event) => commentForm.setData('body', event.target.value)}
                                        className="px-0 w-full text-sm  border-0 focus:ring-0 "
                                        placeholder="Write a comment..." required></textarea>
                                </div>
                                <button type="submit"
                                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-red-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                    Post comment
                                </button>
                            </form>

                            <div className="flow-root">
                                {comments && comments.map((comment, index) => (
                                    <CommentCard key={index} comment={comment} />
                                ))}
                            </div>
                        </div>
                    </article>
                </section>

                <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
                    <h1 className="ml-6 w-full mb-2 mt-5 text-sm font-extrabold text-gray-900 dark:text-white md:text-xs lg:text-sm"><span className="text-transparent bg-clip-text bg-gradient-to-r to-black from-yellow-500">Similar Posts</span></h1>
                    {category && category.map((blog, index) =>
                        <Link key={index} href={"/" + blog.slug}>
                            {/* <BlogListCard key={blog.id} image={blogs.imageurl} title={blogs.title} description={blogs.description} time={blogs.created_at} /> */}
                            <BlogAsideCard
                                key={blog.id}
                                image={blog.imageurl}
                                title={blog.title}
                                time={blog.created_at}
                            />
                        </Link>
                    )}

                    <div className='w-full'>
                        <AdsComponent dataAdSlot='6063218924' />
                    </div>


                    {/* <Adsense
                        client='ca-pub-8694698492521431'
                        slot='6063218924'
                        // adTest='on'
                        style={{ display: 'block' }}
                        format='auto'
                        responsive='true' /> */}


                    {/* <div className="text-sm py-6 top-10">
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

                    <div className="w-full bg-white shadow flex flex-col my-4 p-6 sticky top-20">
                        <h1 className="ml-2 w-full mb-2 mt-5 text-md font-extrabold text-gray-900 dark:text-white md:text-xs lg:text-2xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-black from-yellow-500">Latest Posts</span></h1>
                        {latests && latests.map((blog, index) =>
                            <Link key={index} href={"/" + blog.slug}>
                                {/* <BlogListCard key={blog.id} image={blogs.imageurl} title={blogs.title} description={blogs.description} time={blogs.created_at} /> */}
                                <BlogAsideCard
                                    key={blog.id}
                                    image={blog.imageurl}
                                    title={blog.title}
                                    time={blog.created_at}
                                />
                            </Link>
                        )}
                        {/* <a href="#" className="w-full bg-primary text-white font-bold text-sm uppercase rounded hover:bg-yellow-700 flex items-center justify-center px-2 py-3 mt-6">
                            Subscribe
                        </a> */}

                        <div className='w-full'>
                            <AdsComponent dataAdSlot='6063218924' />
                        </div>
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
        </div>

    )
}


function formatDate(date) {
    const today = moment().startOf('day');
    const dateObj = moment(date);

    if (dateObj.isSame(today, 'd')) {
        return dateObj.fromNow();
    } else {
        return dateObj.format('MMM D, YYYY');
    }
}

ArticleScreen.layout = page => <Layout children={page} />
export default ArticleScreen
