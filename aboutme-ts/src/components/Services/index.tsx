import * as React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/Images/service1.svg'
import img2 from '../../assets/Images/service2.svg'
import img3 from '../../assets/Images/service3.svg'
import arrow from '../../assets/Icons/vuesax-linear-vuesax-linear-arrow-right.svg'

const Services: React.FC = () => {
    return (
        <div id='services'>
            <div className='container'>
                <div className='services py-16 flex items-center justify-between'>
                    <div className='services_title_container max-w-xs'>
                        <h1 className='text-3xl font-bold mb-6'>My Awesome <br /> Service</h1>
                        <p className='text-gray-500'>Eget malesuada tortor ut sed. Tincidunt viverra malesuada nisl vehicula vestibulum. Ut blandit fermentum, cursus nulla. interdum sagittis.</p>
                    </div>
                    <div>
                        <div className='services_item'>
                            <Link to='/' className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <img className='services_item_img1 rounded-md w-14 mr-8' src={img1} alt="" />
                                    <div className='mr-8'>
                                        <h2 className='font-bold text-2xl'>Website for your bussiness</h2>
                                        <p className='text-gray-400'>10+ Project</p>
                                    </div>
                                </div>

                                <div>
                                    <img className=' w-7' src={arrow} alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className='services_item'>
                            <Link to='/' className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <img className='services_item_img1 rounded-md w-14 mr-8' src={img2} alt="" />
                                    <div className='mr-8'>
                                        <h2 className='font-bold text-2xl'>Optimazing codes </h2>
                                        <p className='text-gray-400'>10+ Project</p>
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
                                        <h2 className='font-bold text-2xl'>Frontend Developing</h2>
                                        <p className='text-gray-400'>10+ Project</p>
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