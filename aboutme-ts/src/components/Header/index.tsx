import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { SHOW_MENU } from '../redux/actions';

const Header: React.FC = () => {
    const { showed } = useSelector((s: {menu: {showed: boolean}}) => s.menu)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch({type: SHOW_MENU})
    }


    return (
        <header id='header'>
            <div className='container'>
                <div className='header flex justify-between items-center py-7'>
                    <div>
                        <Link to='/thetilekovich' className='font-extrabold text-2xl'>The Tilekovich</Link>
                    </div>
                    <nav className='desktop_nav flex'>
                        <NavLink className='navlinks' to='/thetilekovich'>Home</NavLink>
                        <NavLink className='navlinks' to='/services'>Services</NavLink>
                        <NavLink className='navlinks' to='/projects'>Projects</NavLink>
                        <NavLink className='navlinks' to='/about'>About</NavLink>
                        <NavLink className='navlinks' to='/contacts'>Contact</NavLink>
                    </nav>



                    <div className='mobile_nav'>
                        <button
                            onClick={handleClick}
                            className='mobile_nav_btn'>
                            <div className={showed ? 'menu_btn_anim1' : ''}></div>
                            <div className={showed ? 'menu_btn_anim2' : ''}></div>
                            <div className={showed ? 'menu_btn_anim3' : ''}></div>
                        </button>
                        <nav className='mobile_nav_item'
                            style={{
                                display: showed ? 'flex' : 'none'
                            }}
                        >
                            <NavLink className='navlinks' to='/thetilekovich'>Home</NavLink>
                            <NavLink className='navlinks' to='/services'>Services</NavLink>
                            <NavLink className='navlinks' to='/projects'>Projects</NavLink>
                            <NavLink className='navlinks' to='/about'>About</NavLink>
                            <NavLink className='navlinks' to='/contacts'>Contact</NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;