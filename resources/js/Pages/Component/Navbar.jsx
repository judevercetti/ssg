import React from 'react';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { Link, useForm, usePage } from '@inertiajs/inertia-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Inertia } from '@inertiajs/inertia';

function Navbar() {
  const { errors } = usePage().props;
  const [openSubDialog, setOpenSubDialog] = React.useState(false);
  const handleOpenSubDialog = () => setOpenSubDialog((cur) => !cur);

  const [isFormVisible, setFormVisible] = React.useState(false);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { auth } = usePage().props
  const searchForm = useForm();
  const subscribeForm = useForm();

  const { url } = usePage();

  const isActive = paths => (paths.includes(url) && url != '/') || paths == url ? 'border-b-2 border-gray-800' : '';

  const handleSubscribe = e => {
    e.preventDefault();
    subscribeForm.clearErrors();
    subscribeForm.post('/subscribe', {
      preserveScroll: true, preserveState: true,
      onSuccess: () => {
        subscribeForm.reset();
        setOpenSubDialog(false);
        toast.success('Thank you for subscribing!');
      }
    });
  }

  const handleSearch = e => {
    e.preventDefault();

    searchForm.get('/search', {
      preserveState: true, preserveScroll: true
    });
  }

  return (
    <>
      <ToastContainer />
      <div className='bg-gray-50 h-9 sticky top-0 z-50'>
        <div className='flex justify-between content-center py-1 border-b'>
          <div className="flex items-center justify-center">
            <Link href="/advertise" className="hidden md:block ml-10 text-sm text-black transition-colors duration-300  hover:text-primary">
              Advertise
            </Link>
            <Link href="/about-us" className="hidden md:block ml-10 text-sm text-black transition-colors duration-300  hover:text-primary">
              About Us
            </Link>
            <Link href="/contact-us" className="hidden md:block ml-10 text-sm text-black transition-colors duration-300  hover:text-primary">
              Contact Us
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <a href="https://www.facebook.com/SouthSudanGlobal.SSGTV" title='Visit our Facebook' className="mx-2 text-black transition-colors duration-300  hover:text-primary" aria-label="Facebook">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                </path>
              </svg>
            </a>
            <a href="https://twitter.com/ssgglobal-ssg" title='Visit our Twitter' className="mx-2 text-black transition-colors duration-300  hover:text-primary ">
              <svg className='h-4 w-4 fill-current' viewBox="0 0 1200 1227" fill="currentColor">
                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
              </svg>
            </a>
            <a href="https://youtube.com/@SSGTVSouthSudanGlobal" title='Visit our Youtube' className="mx-2 text-black transition-colors duration-300  hover:text-primary">
              <svg viewBox="0 0 30 30" fill="currentColor" className="w-5 h-5 fill-current">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
          </div>

          <div className='flex md:mr-5'>
            {auth.user && <div className="block">
              <span className="ml-10 text-black text-md transition-colors duration-300  hover:text-primary">
                <Link href={auth.user.role == 1 ? '/admin' : '/'}>
                  {auth.user.name}
                </Link>
              </span>
              <Link
                href="/logout" method='post' as='button'
                className="mx-5 md:ml-10 text-black text-md transition-colors duration-300  hover:text-primary"
              >
                Logout
              </Link>
            </div>}

            {!auth.user && <>
              <Link
                href="/login"
                className="md:block ml-10 text-black text-md transition-colors duration-300  hover:text-primary">
                Login
              </Link>
              <React.Fragment>
                <button onClick={handleOpenSubDialog} className=" ml-5 md:ml-10 mr-2 text-white px-5 text-md transition-colors duration-300 bg-primary rounded-xl  hover:bg-primary-hover">
                  Subscribe
                </button>
                <Dialog
                  size="lg"
                  open={openSubDialog}
                  handler={handleOpenSubDialog}
                  className="bg-transparent shadow-none w-full"
                >
                  <form onSubmit={handleSubscribe}>
                    <Card className="mx-auto w-full">
                      <CardHeader
                        variant="gradient"
                        className="mb-4 grid h-20 place-items-center bg-primary"
                      >
                        <Typography variant="h5" color="white">
                          Subscribe to our news letter
                        </Typography>
                      </CardHeader>
                      <CardBody className="flex flex-col gap-4">
                        <Typography>
                          By subscribing to our newsletter, you'll gain access to exclusive content, stay updated with the latest news, receive special promotions, and be the first to know about our exciting events, product launches, and industry insights delivered straight to your inbox.
                        </Typography>
                        <Input label="Email" size="lg" value={subscribeForm.data.email ?? ''} onChange={e => subscribeForm.setData('email', e.target.value)} error={errors.email} />
                        {errors.email && <span className='text-xs text-red-500'>{errors.email}</span>}
                      </CardBody>
                      <CardFooter className="pt-2">
                        <Button variant="gradient" type='submit' disabled={subscribeForm.processing} fullWidth className='bg-primary'>
                          Subscribe now
                        </Button>
                      </CardFooter>
                    </Card>
                  </form>
                </Dialog>
              </React.Fragment>
            </>}
          </div>
        </div>
      </div>

      <nav className="items-center justify-between border-b bg-gray-50 sticky top-0 z-50">

        <div className='flex items-center justify-center py-2 px-4 border-b'>
          <Link href='/'>
            <img className='h-8 md:h-14 object-contain' src='/images/logo.png' alt="SSG logo" />
          </Link>
          <Link href='/'>
            <h1 className="relative pl-5 text-xl md:text-3xl text-gray-800 font-bold tracking-tight">
              South Sudan Global
            </h1>
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

            <div className='flex items-center'>
              <button
                className="text-gray-800 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
              <span className='text-gray-800 ml-2 cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'>
                {isFormVisible ? (
                  <form onSubmit={handleSearch} className='transition-all duration-500 ease-in-out transform translate-x-0 opacity-100'>
                    <div className='flex rounded-md'>
                      <input
                        className="shadow appearance-none border rounded-l-md w-full py-1.5 px-3 text-gray-700 text-sm font-normal leading-tight focus:outline-none focus:shadow-outline"
                        id="articleTitle"
                        type="text"
                        placeholder="Search for an article"
                        value={searchForm.data.search_text ?? ''}
                        onChange={(event) => searchForm.setData('search_text', event.target.value)}
                      />
                      <button type='submit' disabled={searchForm.processing} className='bg-primary px-4 rounded-r-md shadow text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                      </button>
                    </div>
                  </form>
                ) : (
                  <button onClick={() => setFormVisible(!isFormVisible)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </button>
                )}
              </span>
            </div>
          </div>

          <div onClick={() => setNavbarOpen(false)} className={"lg:flex flex-grow flex-col md:flex-row" + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">
            {/* <div className='hidden lg:flex items-center py-2 px-8 bg-white'>
              <Link href='/'>
                <img className='h-12 object-contain' src='/images/logo.png' alt="SSG logo" />
              </Link>
              <Link href='/'>
                <h1 className="relative pl-5 xl:text-2xl ml-3 text-gray-800 font-bold tracking-tight">
                  South Sudan Global
                </h1>
              </Link>
            </div> */}

            <div className="w-full flex justify-around py-4 mb-4 border-b lg:hidden items-center">
              <Link href="/advertise" className="text-gray-800 transition-colors duration-300">
                Advertise
              </Link>
              <Link href="/about-us" className="text-gray-800 transition-colors duration-300">
                About Us
              </Link>
              <Link href="/contact-us" className="text-gray-800 transition-colors duration-300">
                Contact Us
              </Link>
              {!auth.user && <Link href="/login" className="text-gray-800 transition-colors duration-300">
                Login
              </Link>}
            </div>

            <ul className="flex flex-col lg:flex-row items-end justify-center list-none lg:mx-auto">
              <li className="">
                <Link
                  className={`mx-4 py-2.5 flex items-center uppercase font-semibold leading-snug text-gray-800 hover:text-primary  ${isActive('/')}`}
                  href="/">
                  Home
                </Link>
              </li>

              <li className=" cursor-pointer">
                <Menu>
                  <MenuHandler>
                    <div className={`mx-4 py-2.5 flex items-center uppercase font-semibold leading-snug text-gray-800 hover:text-primary ${isActive(['/category/regional', '/category/africa', '/category/world'])}`}>
                      News
                    </div>
                  </MenuHandler>
                  <MenuList className='w-32 font-semibold text-base text-start text-primary'>
                    <Menu placement="right-start" offset={5}>
                      <MenuHandler>
                        <MenuItem className='flex justify-between items-center'>
                          <span>National</span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                        </MenuItem>
                      </MenuHandler>
                      <MenuList className='w-62 font-semibold text-base text-start text-primary hover:text-primary'>
                        <MenuItem onClick={() => Inertia.get("/category/politics")}>Politics</MenuItem>
                        <MenuItem onClick={() => Inertia.get("/category/Economy")}>Business</MenuItem>
                        <MenuItem onClick={() => Inertia.get("/category/Education")}>Education</MenuItem>
                        <MenuItem onClick={() => Inertia.get("/category/Health")}>Health</MenuItem>
                        <MenuItem onClick={() => Inertia.get("/category/agriculture")}>Agriculture</MenuItem>
                        <MenuItem onClick={() => Inertia.get("/category/sports")}>Sports</MenuItem>
                        <MenuItem onClick={() => Inertia.get("/category/entertainment")}>Entertainment</MenuItem>
                        <MenuItem onClick={() => Inertia.get("/category/technology")}>Technology</MenuItem>
                        <MenuItem onClick={() => Inertia.get("/category/environment")}>Environment</MenuItem>
                        <Menu placement="right-start" offset={5}>
                          <MenuHandler>
                            <MenuItem className='flex justify-between items-center'>
                              <span>Lifestyle</span>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                              </svg>
                            </MenuItem>
                          </MenuHandler>
                          <MenuList className='w-62 font-semibold text-base text-start text-primary hover:text-primary'>
                            <MenuItem onClick={() => Inertia.get("/category/fashion")}>Fashion</MenuItem>
                            <MenuItem onClick={() => Inertia.get("/category/health-and-fitness")}>Health & Fitness</MenuItem>
                          </MenuList>
                        </Menu>
                        <MenuItem onClick={() => Inertia.get("/category/arts-culture-and-beauty")}>Arts, Culture & Beauty</MenuItem>
                        <MenuItem onClick={() => Inertia.get("/category/peace-and-justice")}>Peace & Justice</MenuItem>
                        <MenuItem onClick={() => Inertia.get("/category/states")}>States</MenuItem>
                      </MenuList>
                    </Menu>
                    <MenuItem onClick={() => Inertia.get("/category/regional")}>Regional</MenuItem>
                    <MenuItem onClick={() => Inertia.get("/category/africa")}>Africa</MenuItem>
                    <MenuItem onClick={() => Inertia.get("/category/world")}>World</MenuItem>
                  </MenuList>
                </Menu>
              </li>
              <li className="">
                <Link
                  className={`mx-4 py-2.5 flex items-center uppercase font-semibold leading-snug text-gray-800 hover:text-primary ${isActive('/category/opinion')}`}
                  href="/category/opinion"
                >
                  Opinion
                </Link>
              </li>
              <li className="">
                <a
                  className={`mx-4 py-2.5 flex items-center uppercase font-semibold leading-snug text-gray-800 hover:text-primary`}
                  href="https://www.youtube.com/@SSGTVSouthSudanGlobal" target='_blank'
                >
                  SSGTV
                </a>
              </li>
              <li className="">
                <Link
                  className={`mx-4 py-2.5 flex items-center uppercase font-semibold leading-snug text-gray-800 hover:text-primary ${isActive('/category/diaspora')}`}
                  href="/category/diaspora"
                >
                  Diaspora
                </Link>
              </li>
              <li className="">
                <Link className={`mx-4 py-2.5 flex items-center uppercase font-semibold leading-snug text-gray-800 hover:text-primary ${isActive('/category/editorial')}`} href="/category/editorial">
                  Editorial
                </Link>
              </li>
              {/* <li className=" cursor-pointer">
                <Menu>
                  <MenuHandler>
                    <div className={`mx-4 py-2.5 flex items-center uppercase font-semibold leading-snug text-gray-800 hover:text-primary ${isActive('/category/')}`}>
                      Business
                    </div>
                  </MenuHandler>
                  <MenuList className='flex flex-col w-40 py-4 font-semibold text-base text-start text-primary'>
                    <MenuItem><Link href="/category/technology">Tech & Science</Link></MenuItem>
                    <MenuItem><Link href="/category/mining">Mining</Link></MenuItem>
                  </MenuList>
                </Menu>
              </li> */}
              <li className="">
                <Link className={`mx-4 py-2.5 flex items-center uppercase font-semibold leading-snug text-gray-800 hover:text-primary ${isActive('/category/economy')}`} href="/category/economy">
                  Economy
                </Link>
              </li>
              <li className="">
                <Link className={`mx-4 py-2.5 flex items-center uppercase font-semibold leading-snug text-gray-800 hover:text-primary ${isActive('/category/sports')}`} href="/category/sports">
                  Sport
                </Link>
              </li>
              <li className="hidden md:block">
                <span
                  className="mx-4 py-1.5 flex items-center uppercase font-semibold leading-snug text-gray-800 hover:text-primary"
                  href="#pablo">
                  {isFormVisible ? (
                    <form onSubmit={handleSearch} className='transition-all duration-500 ease-in-out transform translate-x-0 opacity-100'>
                      <div className='flex rounded-md'>
                        <input
                          className="border rounded-l-md w-full py-1.5 px-3 m-0 text-gray-700 text-sm font-normal leading-tight focus:outline-none focus:shadow-outline"
                          id="articleTitle"
                          type="text"
                          placeholder="Search for an article"
                          value={searchForm.data.search_text ?? ''}
                          onChange={(event) => searchForm.setData('search_text', event.target.value)}
                        />
                        <button type='submit' disabled={searchForm.processing} className='bg-primary px-4 rounded-r-md text-white'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                          </svg>
                        </button>
                      </div>
                    </form>
                  ) : (
                    <button onClick={() => setFormVisible(!isFormVisible)} className='py-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                    </button>
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}



export default Navbar