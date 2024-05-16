import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/header.jpg';
import '../../Style/Banner.css';

import ExploreMenu from './ExploreMenu';
import FoodDisplay from './FoodDisplay';

const Menu = () => {

    const [category, setCategory] = useState('All');

    return (
        <>
            <section className="relative h-screen overflow-hidden bg-cover bg-center flex justify-center items-center md:mt-5">
                <img src={backgroundImage} className="absolute z-0 inset-0 mx-auto my-auto w-[90vw] h-[80vh] object-cover rounded-br-[150px] rounded-tl-[50px]" />
                <div className="absolute text-center text-white flex flex-col justify-center items-center sm:w-[80vw] lg:w-[65vw] px-10 w-[80vw] h-[70vh] sm:h-[50vh] animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-medium tracking-wider mb-6 md:mb-8">Order your Interior Here</h1>
                    <div className="mb-6 text-justify">
                        <h3 className="text-base md:text-xl font-semibold mb-4  pb-2">
                        </h3>
                    </div>
                 {/*}   <Link to="#" >
                        <button
                            className="hover:bg-gradient-to-r from-pink-500 to-indigo-500 hover:text-black rounded-md h-9 border-2 text-white border-indigo-600 w-[30vw] md:w-[20vw] lg:w-[15vw]"
                            variant="outlined"
                            sx={{
                                borderWidth: '2px',
                                borderColor: 'white',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            View Menu
                        </button>
                    </Link>
                        */}
                </div>
            </section>
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
            
        </>
    )
}

export default Menu;
