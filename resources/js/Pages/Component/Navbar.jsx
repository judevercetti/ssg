import React from 'react'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Link, usePage } from '@inertiajs/inertia-react';



function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { auth } = usePage().props

  return (
    <>
      <div className='bg-gray-900 h-8 sticky top-0'>

        <div className='flex justify-between content-center pt-1'>
          <div className='flex'>
            <div className="flex justify-center ml-4">

              <Link href="#" className="mx-2 text-white transition-colors duration-300  hover:text-yellow-600" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                  </path>
                </svg>
              </Link>

              <Link
                href="/"
                className="mx-2 text-white transition-colors duration-300  hover:text-yellow-600 "
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 fill-current">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </Link>
              <Link
                href="/"
                className="mx-2 text-white transition-colors duration-300  hover:text-yellow-600"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="w-5 h-5 fill-current">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </Link>
              <Link
                href="/"
                className="ml-10 text-white text-md transition-colors duration-300  hover:text-yellow-600"
              >
                Advertise
              </Link>



            </div>
          </div>

          <div className='flex mr-10'>
            {auth.user && <>
              <span className="ml-10 text-white text-md transition-colors duration-300  hover:text-yellow-600">
                {auth.user.name}
              </span>
              <Link
                href="/logout" method='post' as='button'
                className="ml-10 text-white text-md transition-colors duration-300  hover:text-yellow-600"
              >
                Logout
              </Link>
            </>}

            {!auth.user && <>
              <Link
                href="/login"
                className="ml-10 text-white text-md transition-colors duration-300  hover:text-yellow-600">
                Login
              </Link>
              <Link
                href="/subscribe"
                className="ml-10 text-white text-md transition-colors duration-300  hover:text-yellow-600"
              >
                Subscribe
              </Link>
            </>}
          </div>
        </div>

      </div>

      <nav className="flex flex-wrap items-center justify-between px-2 py-4 bg-yellow-600 mb-3 sticky top-0 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            {/* <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              <div className="lg:mt-0 absolute top-0 left-0 rounded-l px-8 py-1">
                <div className='flex items-center'>
                  <img className='h-12 object-contain' src='/images/logo.png' alt="" />

                </div>
              </div>
            </Link> */}

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>

            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger">
            <img className='h-12 object-contain' src='/images/logo.png' alt="" />

            <h1 className="relative pl-5 xl:text-2xl ml-3 text-gray-900 font-bold tracking-tight">
              South Sudan Global
            </h1>
            {/* News (National, Regional (East Africa), Africa, world)), Politics, Business and Innovation, Agribusiness and Economy, Opinion, Health and Wellness, Diaspora, Science, Culture, Environment and Climate change, videos */}

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/"
                >
                  <span className="ml-2">Home</span>
                </Link>
              </li>

              <li className="nav-item cursor-pointer">
                <Menu>
                  <MenuHandler>
                    <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">News
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </MenuHandler>
                  <MenuList className='flex flex-col space-y-5 w-32 py-4 font-semibold text-base text-start text-gray-600'>
                    <Menu placement="right-start" offset={5}>
                      <MenuHandler>
                        <MenuItem className='flex justify-between items-center'>
                          <span>National</span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                        </MenuItem>
                      </MenuHandler>
                      <MenuList className='flex flex-col space-y-5 w-32 py-4 font-semibold text-base text-start text-gray-600'>
                        <MenuItem><Link href={"/category/Economy"}>Economy</Link></MenuItem>
                        <MenuItem><Link href={"/category/Education"}></Link>Education</MenuItem>
                        <MenuItem><Link href={"/category/Health"}>Health</Link></MenuItem>
                        <MenuItem><Link href={"/category/Entertainment"}>Entertainment</Link></MenuItem>
                      </MenuList>
                    </Menu>
                    <MenuItem>Regional</MenuItem>
                    <MenuItem>Africa</MenuItem>
                    <MenuItem>World</MenuItem>
                  </MenuList>
                </Menu>


              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Opinions</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Videos</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Contributors</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Agribusiness</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Fashion & lifestyle</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}



export default Navbar