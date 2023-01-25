import * as React from 'react';
import profile from '../../../assets/Images/homeimg.png'
import './style.css'
import { Link } from 'react-router-dom';
import topEffect from '../../../assets/Images/topvector.svg'
import bottomEffect from '../../../assets/Images/bottomvector.svg'
import vector2 from '../../../assets/Images/vector2.svg'

import Links from '../../Links';
import Services from '../../Services';



const HomePage: React.FC = () => {




    return (
        <section id='home'>
            <img className='effect_img' src={topEffect} alt="" />
            <img className='effect_img' src={bottomEffect} alt="" />
            <img className='effect_img' src={vector2} alt="" />

            <div className='container'>
                <div className='home flex justify-between items-center py-10    '>
                    <div>
                        <h2 className='text-gray-400 text-bold text-3xl mb-5'>Frontend Developer</h2>
                        <h1 className='font-extrabold text-6xl'>Tilek uulu Izat</h1>
                        <div className='w-1/2 my-16 bg-white h-1'></div>
                        <p className='max-w-xs text-gray-500 mb-24'>
                            Eget malesuada tortor ut sed. Tincidunt viverra malesuada nisl vehicula vestibulum. Ut blandit fermentum, cursus nulla. Imperdiet neque mi convallis quis interdum sagittis.
                        </p>
                        <Link to='/community'>Let's Talk</Link>
                    </div>
                    <div className='w-80'>
                        <img className='w-full' src={profile} alt="" />
                    </div>
                    <div className='home_info'>
                        <div className='home_info_item'>
                            <h3>Years of Experience</h3>
                            <h1>1+</h1>
                        </div>
                        <div  className='home_info_item'>
                            <h3>Complete Project</h3>
                            <h1>5+</h1>
                        </div>
                        <div  className='home_info_item'>
                            <h3>Client</h3>
                            <h1>1</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Links/>
            <Services/>
        </section>
    );
}

export default HomePage;