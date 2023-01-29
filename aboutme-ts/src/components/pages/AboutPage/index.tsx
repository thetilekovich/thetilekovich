import * as React from 'react';
import './style.css'
import aboutImg from '../../../assets/Images/moscow.jpg'
import SocialMedias from '../../SocialMedias';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADD_EMAIL, ADD_NAME, ADD_JOB, ADD_NEW_COMMENT } from '../../redux/actions';
import axios from 'axios';

const AboutPage: React.FC = () => {
    const { language } = useSelector((s: { language: { language: string } }) => s.language)

    const dispatch = useDispatch()
    const { comment, name, job, email } = useSelector((s: { comment: { comment: string, name: string, job: string, email: string } }) => s.comment)

    const handleSendClick = async () => {
        if (comment && name && job && email) {
            try {
                await axios.post('https://63ab2e2acf281dba8c1d11c7.mockapi.io/api/v1/comments', {
                    comment,
                    name,
                    job,
                    email,
                })
                dispatch({ type: ADD_NEW_COMMENT, payload: '' })
                dispatch({ type: ADD_EMAIL, payload: '' })
                dispatch({ type: ADD_NAME, payload: '' })
                dispatch({ type: ADD_JOB, payload: '' })
            } catch (e) {
                console.log(e)
            }
        } else {

        }
    }



    return (
        <section id='aboutpage'>
            <div className='container'>
                <div className='about_gen'>
                    <div className='about_gen_info'>
                        <div className='about_gen_info_img'>
                            <img className='about_gen_info_img_item' src={aboutImg} alt="" />
                        </div>
                        <div className='about_gen_info_right flex'>
                            <div className='about_gen_info_content'>
                                <h1>{language === 'ru' ? 'Изат Тилек уулу' : 'Izat Tilek uulu'}</h1>
                                <p>{language === 'ru' ? 'Frontend разработчик' : 'Frontend Engeneer'}</p>
                                <ul>
                                    <li> <span>{language === 'ru' ? 'Дата рождения' : 'Birth date'} : </span>{language === 'ru' ? '7-Август 2003' : '7-August 2003'} ( 20 )</li>
                                    <li> <span>{language === 'ru' ? 'Место рождения' : 'Birth country'} : </span>{language === 'ru' ? 'Кыргызстан' : 'Kyrgyzstan'}</li>
                                    <li><span>{language === 'ru' ? 'Граждансто' : 'Citizenship'} : </span>{language === 'ru' ? 'Кыргызстан' : 'Kyrgyzstan'}</li>
                                    <li><span>{language === 'ru' ? 'Место проживание' : 'Place of Residence'} : </span>{language === 'ru' ? 'Москва, Россия' : 'Moscow, Russia'}</li>
                                    <li><span>{language === 'ru' ? 'Образование' : 'Education'} : </span>{language === 'ru' ? 'Средняя' : 'High-school diploma'}</li>
                                    <li><span>{language === 'ru' ? 'Курс' : 'Course'} : </span>{language === 'ru' ? 'Frontend developer' : 'Frontend develor'}</li>
                                    <li><span>{language === 'ru' ? 'Опыт работы' : 'Work Experience'} : </span>{language === 'ru' ? '1 год (не коммерческое)' : '1 year (not commercial)'}</li>
                                </ul>

                            </div>
                            <div className='about_gen_info_social'>
                                <SocialMedias position='flex flex-col' margin='20px 0' />
                            </div>
                        </div>

                    </div>
                    <div className='about_gen_subinfo'>
                        <div className='about_gen_subinfo_content'>
                            <div className='about_gen_subinfo_content_container'>
                                <div className='about_gen_subinfo_content_skills'>
                                    <div className='about_gen_subinfo_content_skills_item'>
                                        <h4>{language === 'ru' ? 'Жесткие Навыки:' : 'Hard Skills:'}</h4>
                                        <ul>
                                            <li>HTML5<span> & </span>CSS3</li>
                                            <li>JavaScript<span> & </span>ES6+</li>
                                            <li>Node.js<span> & </span>npm</li>
                                            <li>Tailwind<span> & </span>Bootstrap</li>
                                            <li>React.js<span> & </span>TypeScript</li>
                                            <li>Redux<span> & </span>TS</li>
                                            <li>Git<span> & </span>GitHub</li>
                                            <li>Linux<span> & </span>Windows</li>
                                            <li>Figma<span> & </span>PhotoShop</li>
                                            <li>Microsoft Office 365</li>

                                        </ul>
                                    </div>
                                    <div className='about_gen_subinfo_content_skills_item1'>
                                        <h4>{language === 'ru' ? 'Мягкие навыки:' : 'Soft Skills:'}</h4>
                                        <ul>
                                            <li>{language === 'ru' ? 'Командная работа' : 'Teamwork'}</li>
                                            <li>{language === 'ru' ? 'Лидер' : 'Leadership'}</li>
                                            <li>{language === 'ru' ? 'Тайм менеджмент' : 'Time management'}</li>
                                            <li>{language === 'ru' ? 'Мотивация' : 'Motivation'}</li>
                                            <li>{language === 'ru' ? 'Адаптивность' : 'Adaptability'}</li>
                                            <li>{language === 'ru' ? 'Желание учиться' : 'Willingness to learn'}</li>
                                            <li>{language === 'ru' ? 'Организатор' : 'Organization'}</li>
                                            <li>{language === 'ru' ? 'Креативный' : 'Creatifity'}</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className='about_gen_subinfo_content_resume'>
                                    <h1>{language === 'ru' ? 'Мой CV' : 'My CV'} :</h1>
                                    <div className='flex flex-col'>
                                        <a href="https://drive.google.com/file/d/1qYApndAvoNYRXmfr54bcdZGQMedGgvkn/view?usp=sharing">English</a>
                                        <a href="https://drive.google.com/file/d/1le9th-spBYfiUkq0WaaHsxr-ImbOrB0U/view?usp=sharing">Russian</a>
                                    </div>
                                </div>
                            </div>

                            <div className=' about_gen_subinfo_content_comment flex flex-col'>
                                <h1>{language === 'ru' ? 'Оставить отзыв' : 'Leave feedback'}</h1>
                                <textarea
                                    value={comment}
                                    onChange={el => dispatch({ type: ADD_NEW_COMMENT, payload: el.target.value })}
                                    rows={5} cols={28}></textarea>
                                <input
                                    value={name}
                                    onChange={el => dispatch({ type: ADD_NAME, payload: el.target.value })}
                                    placeholder={language === 'ru' ? 'Ваша имя?' : 'Your name?'} type="text" />
                                <input
                                    value={email}
                                    onChange={el => dispatch({ type: ADD_EMAIL, payload: el.target.value })}
                                    placeholder={language === 'ru' ? 'Ваша эл. почта?' : 'Your email?'} type="email" />
                                <input
                                    value={job}
                                    onChange={el => dispatch({ type: ADD_JOB, payload: el.target.value })}
                                    placeholder={language === 'ru' ? 'Чем вы занимаетесь?' : "What is your profession?"} type="text" />
                                <button
                                    onClick={handleSendClick}
                                >{language === 'ru' ? 'Отправить' : 'Send'}</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default AboutPage;