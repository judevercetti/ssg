import React, { useEffect } from 'react'
import BlogListCard2 from '../Component/BlogListCard2'
import { Link, useForm } from '@inertiajs/inertia-react'
import BlogListCard from '../Component/BlogListCard'
import Navbar from '../Component/Navbar'
import Layout from '../Component/Layout'

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
    <div>
      <div className='max-w-screen-md mx-auto mt-5'>
        <form onSubmit={handleSearch}>
          <div className='flex rounded-md mb-10'>
            <input
              className="shadow appearance-none border rounded-l-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="articleTitle"
              type="text"
              placeholder="Search for an article"
              value={data.search_text ?? ''}
              onChange={(event) => setData('search_text', event.target.value)}
            />
            <button type='submit' disabled={processing} className='bg-yellow-600 px-4 rounded-r-md shadow text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>
        </form>
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
    </div>
  )
}

SearchArticleScreen.layout = page => <Layout children={page} />
export default SearchArticleScreen