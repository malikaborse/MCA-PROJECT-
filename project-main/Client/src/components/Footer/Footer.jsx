import React from 'react'
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter,BsGeoAlt, BsTelephone } from 'react-icons/bs';

const FooterS = () => {
    return (
        <Footer container className='border border-t-8 border-blue-300 bg-gray-800'>
            <div className='w-full mx-auto text-white'>
                <div className='my-3'>
                <div className='grid w-full justify-between items-center sm:flex md:grid-cols-1'>
                        <Link to='/' className='font-bold text-5xl md:text-8xl text-center ' style={{ fontVariant: 'unicase' }}>
                            <div className='px-5 py-1 rounded-lg text-blue-500'style={{ fontSize: '40px' }}>
                                Greenskape
                            </div>
                        </Link>
                    </div>
                </div>
                
                <div className='grid w-full justify-between items-center sm:flex md:grid-cols-1'>
                    
                    <div className='grid grid-cols-3 gap-2 mt-4 sm:grid-cols-4 sm:gap-2'>
                        {/*About*/}
                        <div>
                            <Footer.Title className='text-gray-200 text-lg font-semibold' style={{ fontVariant: 'unicase' }} title='About' />
                            <Footer.LinkGroup col>
                                <Footer.Link className='hover:text-gray-300' href='/about'>About</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        {/*Contact*/}
                        <div>
                            <Footer.Title className='text-gray-200 text-lg font-semibold' style={{ fontVariant: 'unicase' }} title='Contact Us' />
                            <Footer.LinkGroup col>
                                <Footer.Link className='hover:text-gray-300' href='#'>Email: info@greenskape.com</Footer.Link>
                                <Footer.Link className='hover:text-gray-300' href='#'>Phone: 9325030351</Footer.Link>
                                <Footer.Link className='hover:text-gray-300' href='#'>3rd floor,Gajanan annex, near Magnum hospital,patil lane,nashik</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        {/*Follow Us*/}
                        <div>
                            <Footer.Title className='text-gray-200 text-lg font-semibold' style={{ fontVariant: 'unicase' }} title='Follow Us' />
                            <Footer.LinkGroup col>
                                <Footer.Link className='hover:text-gray-300' href='#'>Facebook</Footer.Link>
                                <Footer.Link className='hover:text-gray-300' href='#'>Twitter</Footer.Link>
                                <Footer.Link className='hover:text-gray-300' href='#'>Instagram</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        {/*Services*/}
                        <div>
                            <Footer.Title className='text-gray-200 text-lg font-semibold' style={{ fontVariant: 'unicase' }} title='Services' />
                            <Footer.LinkGroup col>
                                <Footer.Link className='hover:text-gray-300' href='#'>Privacy Policy</Footer.Link>
                                <Footer.Link className='hover:text-gray-300' href='#'>Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div> 
                        {/*Blog*/}
                        <div>
                            <Footer.Title className='text-gray-200 text-lg font-semibold' style={{ fontVariant: 'unicase' }} title='Blog' />
                            <Footer.LinkGroup col>
                                <Footer.Link className='hover:text-gray-300' href='#'>Latest Articles</Footer.Link>
                                <Footer.Link className='hover:text-gray-300' href='#'>New Designs</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        {/*FAQs*/}
                        <div>
                            <Footer.Title className='text-gray-200 text-lg font-semibold' style={{ fontVariant: 'unicase' }} title='FAQs' />
                            <Footer.LinkGroup col>
                                <Footer.Link className='hover:text-gray-300' href='#'>FAQs</Footer.Link>
                                <Footer.Link className='hover:text-gray-300' href='#'>Help Center</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                     

                        
                    </div>
                </div>
                <Footer.Divider />
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright
                        className='hover:text-pink-300'
                        href='#'
                        by="komalika borse"
                        year={new Date().getFullYear()}
                    />
                    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                        <Footer.Icon className='hover:text-gray-300' href='#' icon={BsTelephone} />
                        <Footer.Icon className='hover:text-gray-300' href='#' icon={BsGeoAlt} />
                        <Footer.Icon className='hover:text-gray-300' href='#' icon={BsFacebook} />
                        <Footer.Icon className='hover:text-gray-300' href='#' icon={BsInstagram} />
                        <Footer.Icon className='hover:text-gray-300' href='#' icon={BsTwitter} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterS
