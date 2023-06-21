import React, { useState, useEffect } from 'react';
import BlogListCard from './Component/BlogListCard';
import { Link } from '@inertiajs/inertia-react';
import AdsComponent from './Component/AdsComponent';

const InfinityList = ({ blog_category }) => {
    const [listItems, setListItems] = useState(blog_category);
    const [isFetching, setIsFetching] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        fetchMoreListItems();
    }, [isFetching]);

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
        setIsFetching(true);
        setPage((prevPage) => prevPage + 1)
    }

    async function fetchMoreListItems() {
        try {
            const response = await axios.get(`/api/categories?page=${page}`);
            const data = await response.data;
            console.log(data)
            setListItems((prevPosts) => [...prevPosts, ...data]);
            setIsFetching(false);
        } catch (error) {
            console.error('Error fetching posts:', error);
            setIsFetching(false);
        }
    }

    return (
        <>
            <ul className="list-group mb-2">
                {listItems.map((listItem, index) =>
                    <BlogList key={index} category={listItem} />
                )}
            </ul>
            {isFetching && 'Fetching more list items...'}
        </>
    );
};


function BlogList({ category }) {
    console.log(category)
    return category.two_blog.length == 0 ? <></> : <>
        <h2 className="ml-6 mb-2 my-10 text-2xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-3xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-black from-yellow-500">  {category.name}</span></h2>
        {category.two_blog.map((blogs, index) =>
            <Link key={index} href={"/" + blogs.slug}>
                <BlogListCard key={blogs.id} image={blogs.imageurl} title={blogs.title} description={blogs.description} time={blogs.created_at} />
            </Link>
        )}

        <Link href={"/category/" + category.slug} type="submit" className="m-2 p-2 text-sm font-medium text-white bg-gradient-to-r to-black from-yellow-500  focus:ring-4 focus:outline-none">
            {"More " + category.name}
        </Link>

        <div className='w-full mt-5'>
            <AdsComponent dataAdSlot='6063218924' />
        </div>
    </>
}

export default InfinityList;