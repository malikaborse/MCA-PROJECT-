import React from 'react'
import Banner from '../components/Home/Banner'
import About from '../components/Home/About' 
const Home = () => {
    return (
        <div className='min-h-screen text-black md:mt-5'>
            <Banner />
            <About />
        </div>
    )
}

export default Home