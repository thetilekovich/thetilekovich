import * as React from 'react';
import profile from '../../../assets/Images/home.jpg'
import './style.css'
import { Link } from 'react-router-dom';
import topEffect from '../../../assets/Images/topvector.svg'
import bottomEffect from '../../../assets/Images/bottomvector.svg'
import vector2 from '../../../assets/Images/vector2.svg'
import arrow from '../../../assets/Icons/vuesax-linear-vuesax-linear-arrow-right.svg'
import Links from '../../Links';
import Services from '../../Services';
import Projects from '../../Projects';
import Comments from '../../Comments';
import Contact from '../../Contact';
import { useSelector } from 'react-redux';

const HomePage: React.FC = () => {
    const { language } = useSelector((s: { language: { language: string } }) => s.language)

    return (
        <section id='home'>
            <img className='effect_img' src={topEffect} alt="" />
            <img className='effect_img' src={bottomEffect} alt="" />
            <img className='effect_img' src={vector2} alt="" />

            <div className='container'>
                <div className='home flex justify-between items-center py-10    '>
                    <div className='home_wellcome_item flex justify-between items-center'>
                        <div className='home_title_container'>
                            <h2 className='text-gray-400 text-bold text-3xl mb-5'>{language === 'ru' ? 'Frontend Engeneer' : 'Frontend Engeneer'}</h2>
                            <h1 className='font-extrabold text-6xl'>{language === 'ru' ? 'Изат Тилек уулу' : 'Tilek uulu Izat'}</h1>
                            <div className='w-1/2 my-16 bg-white h-1'></div>
                            <p className='max-w-xs text-gray-500 mb-24'>
                                {language === 'ru' ? 'Ничего в жизни не важнее чем ответ на вопрос чем ты занимаешься' : 'Nothing is more important in life than the answer to the question of what do you do?' }
                            </p>

                            <div className='flex items-center'>
                                <Link className='home_title_container_link mr-2' to='/contacts'>{language === 'ru' ? 'Связаться' : 'Let\'s Talk'}</Link>
                                <img className='w-4' src={arrow} alt="" />
                            </div>
                        </div>
                        <div className='home_profile_img w-80'>
                            <img className='w-full mx-10 rounded-xl' src={profile} alt="" />
                        </div>
                    </div>

                    <div className='home_info'>
                        <div className='home_info_item'>
                            <h3>{language === 'ru' ? 'Опыт работы' : 'Years of Experience'}</h3>
                            <h1>0.8+</h1>
                        </div>
                        <div className='home_info_item'>
                            <h3>{language === 'ru' ? 'Проекты' : 'Completed Project'}</h3>
                            <h1>5+</h1>
                        </div>
                        <div className='home_info_item'>
                            <h3>{language === 'ru' ? 'клиенты' : 'Client'}</h3>
                            <h1>1</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Links />
            <Services />
            <Projects />
            <Comments />
            <Contact />
        </section>
    );
}

export default HomePage;