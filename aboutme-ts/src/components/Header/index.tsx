import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css'

const Header: React.FC = () => {
    return (
        <header id='header'>
            <div className='container'>
                <div className='header flex justify-between items-center py-7'>
                    <div>
                        <Link to='/' className='font-extrabold text-2xl'>The Tilekovich</Link>
                    </div>
                    <nav className='flex'>
                        <NavLink className='navlinks' to='/'>Home</NavLink>
                        <NavLink className='navlinks' to='/services'>Services</NavLink>
                        <NavLink className='navlinks' to='/projects'>Projects</NavLink>
                        <NavLink className='navlinks' to='/about'>About</NavLink>
                        <NavLink className='navlinks' to='/contact'>Contact</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;