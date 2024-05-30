import React, { useEffect } from 'react'
import BlogListCard2 from './Component/BlogListCard2'
import { Link, useForm } from '@inertiajs/inertia-react'
import BlogListCard from './Component/BlogListCard'
import Navbar from './Component/Navbar'
import Layout from './Component/Layout'
import AdsComponent from './Component/AdsComponent'

function SearchArticleScreen({ posts }) {
  const { data, setData, get, processing } = useForm();

  const handleSearch = e => {
    e.preventDefault();

    get('/search', {
      preserveState: true, preserveScroll: true
    });
  }


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setData('search_text', params.get('search_text'))
  }, []);

  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='max-w-screen-md mt-5 ml-auto'>
        {posts && posts.length == 0 ?
          <div className='flex items-center text-center font-semibold text-lg w-full bg-gray-100 p-10'>
            <span className='mx-auto'>
              No posts found matching that query
            </span>
          </div>
          :
          posts.map((latest, index) =>
            <Link key={index} href={"/" + latest.slug}>
              <BlogListCard title={latest.title} description={latest.description} time={latest.updated_at} image={latest.imageurl} />
            </Link>
          )}
      </div>

      <aside className='w-full lg:w-1/4 pt-5'>
        <div className='w-full lg:h-screen lg:mb-20 sticky top-20'>
          <AdsComponent dataAdSlot='6063218924' />
        </div>
      </aside>
    </div>
  )
}

SearchArticleScreen.layout = page => <Layout children={page} />
export default SearchArticleScreen