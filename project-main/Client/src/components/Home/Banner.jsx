import React from 'react'
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/bg_1.jpg';

const Banner = () => {
    return (
        <section className="banner relative h-screen overflow-hidden bg-cover bg-center flex justify-center items-center">
            <img src={backgroundImage} className="absolute z-0 inset-0 mx-auto my-auto w-[100vw] h-[100vh] " />
            <div className="banner-content text-center text-white flex flex-col justify-center items-center sm:w-[80vw] lg:w-[65vw] backdrop-filter backdrop-blur-sm bg-white bg-opacity-10 rounded-lg shadow-md px-2 w-[150vw] h-[50vh] sm:h-[40vh] animate-fade-in">
                <h1 className="text-5xl font-medium tracking-wider mb-4 text-black">Welcome To <span className='px-2 py-1 bg-gradient-to-r from-teal-700 from-30% via-sky-500 via-35% to-indigo-700 to-90% rounded-lg inline-block text-transparent bg-clip-text' style={{ fontVariant: 'unicase' }}> Greenskape studio
</span></h1>
                <h3 className="text-xl font-semibold mb-8 border-b border-gray-400 pb-2 ml-4 mr-4 text-gray-700">
                We Create Amazing Interior/Architecture Designs
                </h3>
                <Link to="#">
                    <button
                        className="self-center hover:bg-gradient-to-r from-pink-500 to-indigo-500 hover:text-white sm:w-[20vw] w-[35vw] rounded-md md:text-black h-9 border-2 text-white border-teal-600 lg:w-[12vw]"
                        variant="outlined"
                        style={{
                            borderWidth: '2px',
                            borderColor: 'white',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        view our works
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default Banner
