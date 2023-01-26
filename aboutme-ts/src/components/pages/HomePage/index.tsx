import * as React from 'react';
import profile from '../../../assets/Images/homeimg.png'
import './style.css'
import { Link } from 'react-router-dom';
import topEffect from '../../../assets/Images/topvector.svg'
import bottomEffect from '../../../assets/Images/bottomvector.svg'
import vector2 from '../../../assets/Images/vector2.svg'
import arrow from '../../../assets/Icons/vuesax-linear-vuesax-linear-arrow-right.svg'
import Links from '../../Links';
import Services from '../../Services';
import Projects from '../../Projects';



const HomePage: React.FC = () => {




    return (
        <section id='home'>
            <img className='effect_img' src={topEffect} alt="" />
            <img className='effect_img' src={bottomEffect} alt="" />
            <img className='effect_img' src={vector2} alt="" />

            <div className='container'>
                <div className='home flex justify-between items-center py-10    '>
                    <div className='home_wellcome_item flex justify-between items-center'>
                        <div className='home_title_container'>
                            <h2 className='text-gray-400 text-bold text-3xl mb-5'>Frontend Developer</h2>
                            <h1 className='font-extrabold text-6xl'>Tilek uulu Izat</h1>
                            <div className='w-1/2 my-16 bg-white h-1'></div>
                            <p className='max-w-xs text-gray-500 mb-24'>
                                Ut blandit fermentum, cursus nulla. Imperdiet neque mi convallis quis interdum sagittis.
                            </p>
                            <div className='flex items-center'>
                                <Link className='home_title_container_link mr-2' to='/community'>Let's Talk</Link>
                                <img className='w-4' src={arrow} alt="" />
                            </div>
                        </div>
                        <div className='home_profile_img w-80'>
                            <img className='w-full mx-10' src={profile} alt="" />
                        </div>
                    </div>

                    <div className='home_info'>
                        <div className='home_info_item'>
                            <h3>Years of Experience</h3>
                            <h1>1+</h1>
                        </div>
                        <div className='home_info_item'>
                            <h3>Complete Project</h3>
                            <h1>5+</h1>
                        </div>
                        <div className='home_info_item'>
                            <h3>Client</h3>
                            <h1>1</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Links />
            <Services />
            <Projects/>
        </section>
    );
}

export default HomePage;