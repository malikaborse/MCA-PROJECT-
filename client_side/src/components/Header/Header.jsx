import React from 'react'
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className='fixed top-0 left-0 right-0 bg-orange-500 shadow-lg z-50 justify-between items-center'>
                <h1 className='text-white text-lg'> - Header - </h1>
                <Button> Click me </Button>
            </div>
        </>
    )
}

export default Header