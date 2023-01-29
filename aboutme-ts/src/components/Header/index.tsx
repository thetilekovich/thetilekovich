import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_LANGUAGE, SHOW_CHOSE, SHOW_MENU } from '../redux/actions';

const Header: React.FC = () => {
    const { showed } = useSelector((s: { menu: { showed: boolean } }) => s.menu)
    const { language } = useSelector((s: { language: { language: string } }) => s.language)
    const { showChose } = useSelector((s: { language: { showChose: boolean } }) => s.language)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch({ type: SHOW_MENU })
    }

    const showHide = () => {
        dispatch({ type: SHOW_CHOSE })
    }

    const changeLanuage = (lang: string) => {
        dispatch({ type: CHANGE_LANGUAGE, payload: lang })
        showHide()
    }
    return (
        <header id='header'>
            <div className='container'>
                <div className='header flex justify-between items-center py-7'>
                    <div className='flex'>
                        <Link to='/thetilekovich' className='font-extrabold text-2xl'>The Tilekovich</Link>
                        <div className='ml-5 mt-1 relative'>
                            <button
                                className='text-gray-400'
                                onClick={showHide}
                            >Язык - Language</button>
                            {
                                showChose && <div className='absolute flex flex-col items-start'>
                                    <button
                                        style={{
                                            color: language === 'en' ? 'orange' : 'white'
                                        }}
                                        onClick={() => changeLanuage('en')}
                                    >English</button>
                                    <button
                                        style={{
                                            color: language === 'ru' ? 'orange' : 'white'
                                        }}
                                        onClick={() => changeLanuage('ru')}
                                    >Русский</button>
                                </div>
                            }


                        </div>
                    </div>
                    <nav className='desktop_nav flex'>
                        <NavLink className='navlinks' to='/thetilekovich'>{language === 'ru' ? 'Домой' : 'Home'}</NavLink>
                        <NavLink className='navlinks' to='/services'> {language === 'ru' ? 'Услуги' : 'Services'}</NavLink>
                        <NavLink className='navlinks' to='/projects'>{language === 'ru' ? 'Проекты' : 'Projects'}</NavLink>
                        <NavLink className='navlinks' to='/about'>{language === 'ru' ? 'Обо мне' : 'About'}</NavLink>
                        <NavLink className='navlinks' to='/contacts'>{language === 'ru' ? 'Контакты' : 'Contact'}</NavLink>
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
                            <NavLink className='navlinks' to='/thetilekovich'>{language === 'ru' ? 'Домой' : 'Home'}</NavLink>
                            <NavLink className='navlinks' to='/services'>{language === 'ru' ? 'Сервисы' : 'Services'}</NavLink>
                            <NavLink className='navlinks' to='/projects'>{language === 'ru' ? 'Проекты' : 'Projects'}</NavLink>
                            <NavLink className='navlinks' to='/about'>{language === 'ru' ? 'Обо мне' : 'About'}</NavLink>
                            <NavLink className='navlinks' to='/contacts'>{language === 'ru' ? 'Контакты' : 'Contact'}</NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;