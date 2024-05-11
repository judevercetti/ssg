import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";

export const Footer = () => {
    return (
        <footer className="bg-gray-50">
            <div className="container p-3 md:p-6 mx-auto">
                <div className="lg:flex mx-auto">
                    <div className="w-full md:-mx-6 lg:w-2/5">
                        <div className="md:px-6">
                            <div className="flex space-x-5 items-center">
                                <Link href="/" className="p-3 rounded">
                                    <img className="w-40" src='/images/logo.png' alt="SSG logo" />
                                </Link>
                                <div className="text-start mg:pr-5">
                                    <h1 className="text-2xl text-gray-900 font-bold tracking-tight">
                                        South Sudan Global
                                    </h1>
                                    <p className="lg:max-w-sm mt-2 mr-2">Africa's News Leader</p>

                                    <div className="flex mt-6 -mx-2">
                                        <a href="https://www.facebook.com/SouthSudanGlobal.SSGTV" title='Visit our Facebook' className="mx-2 hover:text-primary transition-colors duration-300" aria-label="Facebook">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                                </path>
                                            </svg>
                                        </a>
                                        <a href="https://twitter.com/ssgglobal-ssg" title='Visit our Twitter' className="mx-2 hover:text-primary transition-colors duration-300 ">
                                            <svg className='h-4 w-4 fill-current' viewBox="0 0 1200 1227" fill="currentColor">
                                                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                                            </svg>
                                        </a>
                                        <a href="https://youtube.com/@SSGTVSouthSudanGlobal" title='Visit our Youtube' className="mx-2 hover:text-primary transition-colors duration-300">
                                            <svg viewBox="0 0 30 30" fill="currentColor" className="w-5 h-5 fill-current">
                                                <circle cx="15" cy="15" r="4" />
                                                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div>
                                <h2 className="uppercase dark:hover:text-primary font-semibold">About</h2>
                                <Link href="/about-us" className="block mt-2 text-sm white hover:text-primary hover:underline">About Us</Link>
                                <Link href="/contact-us" className="block mt-2 text-sm white hover:text-primary hover:underline">Contact Us</Link>
                                <Link href="/advertise" className="block mt-2 text-sm white hover:text-primary hover:underline">Advertise</Link>
                            </div>

                            <div>
                                <h2 className="uppercase dark:hover:text-primary font-semibold">News</h2>
                                <Link href="/category/national" className="block mt-2 text-sm white hover:text-primary hover:underline">National</Link>
                                <Link href="/category/regional" className="block mt-2 text-sm white hover:text-primary hover:underline">Regional</Link>
                                <Link href="/category/africa" className="block mt-2 text-sm white hover:text-primary hover:underline">Africa</Link>
                                <Link href="/category/world" className="block mt-2 text-sm white hover:text-primary hover:underline">World</Link>
                            </div>

                            <div>
                                <h2 className="uppercase dark:hover:text-primary font-semibold">Categories</h2>
                                <Link href="/category/diaspora" className="block mt-2 text-sm white hover:text-primary hover:underline">Diaspora</Link>
                                <Link href="/category/health-and-fitness" className="block mt-2 text-sm white hover:text-primary hover:underline">Health & Fitness</Link>
                                <Link href="/category/education" className="block mt-2 text-sm white hover:text-primary hover:underline">Education</Link>
                                <Menu placement="top" offset={5}>
                                    <MenuHandler>
                                        <span className="cursor-pointer block mt-2 text-sm white hover:text-primary hover:underline">More Categories</span>
                                    </MenuHandler>
                                    <MenuList className='w-62 font-semibold text-base text-start text-gray-600'>
                                        <MenuItem onClick={() => Inertia.get("/category/politics")}>Politics</MenuItem>
                                        <MenuItem onClick={() => Inertia.get("/category/Economy")}>Economy</MenuItem>
                                        <MenuItem onClick={() => Inertia.get("/category/Education")}>Education</MenuItem>
                                        <MenuItem onClick={() => Inertia.get("/category/Health")}>Health</MenuItem>
                                        <MenuItem onClick={() => Inertia.get("/category/agriculture")}>Agriculture</MenuItem>
                                        <MenuItem onClick={() => Inertia.get("/category/sports")}>Sports</MenuItem>
                                        <MenuItem onClick={() => Inertia.get("/category/entertainment")}>Entertainment</MenuItem>
                                        <MenuItem onClick={() => Inertia.get("/category/technology")}>Technology</MenuItem>
                                        <MenuItem onClick={() => Inertia.get("/category/environment")}>Environment</MenuItem>
                                        <MenuItem onClick={() => Inertia.get("/category/arts-culture-and-beauty")}>Arts, Culture & Beauty</MenuItem>
                                        <MenuItem onClick={() => Inertia.get("/category/peace-and-justice")}>Peace & Justice</MenuItem>
                                        <MenuItem onClick={() => Inertia.get("/category/states")}>States</MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>

                            <div>
                                <h2 className="uppercase dark:hover:text-primary font-semibold">Legal</h2>
                                <Link href="/terms-of-use" className="block mt-2 text-sm white hover:text-primary hover:underline">Terms Of Use</Link>
                                <Link href="/privacy-policy" className="block mt-2 text-sm white hover:text-primary hover:underline">Privacy Policy</Link>
                                <Link href="/cookie-policy" className="block mt-2 text-sm white hover:text-primary hover:underline">Cookie Policy</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

                <div>
                    <p className="text-center text-sm">
                        ©️2024 South Sudan Global. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};