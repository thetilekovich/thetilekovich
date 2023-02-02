import * as React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/Images/service1.svg'
import img2 from '../../assets/Images/service2.svg'
import img3 from '../../assets/Images/service3.svg'
import arrow from '../../assets/Icons/vuesax-linear-vuesax-linear-arrow-right.svg'
import { useSelector } from 'react-redux';



const Services: React.FC = () => {
    const { language } = useSelector((s: { language: { language: string } }) => s.language)
    return (
        <div id='services'>
            <div className='container'>
                <div className='services py-16 flex items-center justify-between'>
                    <div className='services_title_container max-w-xs'>
                        <h1 className='text-3xl font-bold mb-6'>{language === 'ru' ? 'Мои некоторые' : 'My Awesome '}<br />{language === 'ru' ? 'Услуги' : 'Service'} </h1>
                        <p className='text-gray-500'>{language === 'ru' ? 'Только наши работы докажут что мы существовали и они продолжают жить вместе с другими людми' : '"Memories of our lives, of our works and our deeds will continue in others."'}</p>
                    </div>
                    <div>
                        <div className='services_item'>
                            <Link to='/services' className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <img className='services_item_img1 rounded-md w-14 mr-8' src={img1} alt="" />
                                    <div className='mr-8'>
                                        <h2 className='font-bold text-2xl'>{language === 'ru' ? 'Одностраничные сайты' : 'Single Page developing'}</h2>
                                        <p className='text-gray-400'>10+ {language === 'ru' ? ' Проектов' : 'Projects'}</p>
                                    </div>
                                </div>

                                <div>
                                    <img className=' w-7' src={arrow} alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className='services_item'>
                            <Link to='/services' className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <img className='services_item_img1 rounded-md w-14 mr-8' src={img2} alt="" />
                                    <div className='mr-8'>
                                        <h2 className='font-bold text-2xl'>{language === 'ru' ? 'Оптимизация' : 'Optimazing codes'}</h2>
                                        <p className='text-gray-400'>10+{language === 'ru' ? ' Проектов' : ' Projects'}</p>
                                    </div>
                                </div>

                                <div>
                                    <img className='w-7' src={arrow} alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className='services_item'>
                            <Link to='/' className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <img className='services_item_img1 rounded-md w-14 mr-8' src={img3} alt="" />
                                    <div className='mr-8'>
                                        <h2 className='font-bold text-2xl'>{language === 'ru' ? 'Обновления существуещего' : 'Correct existing site'}</h2>
                                        <p className='text-gray-400'>10+ {language === 'ru' ? ' Проектов' : ' Projects'}</p>
                                    </div>
                                </div>

                                <div>
                                    <img className='w-7' src={arrow} alt="" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;