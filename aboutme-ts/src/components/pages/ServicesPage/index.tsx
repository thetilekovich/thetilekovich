import * as React from 'react';
import './style.css'
import seoImg from '../../../assets/Images/seo.jpg'
import creatImg from '../../../assets/Images/creatweb.jpg'
import optimImg from '../../../assets/Images/optimization.jpg'
import adapImg from '../../../assets/Images/adaptive.jpg'

const ServicesPage: React.FC = () => {
    return (
        <section id='servicespage'>
            <div className='container'>
                <div className='servicespage'>
                    <h1 className='servicespage_title'>My Services</h1>
                    <div className='services_global'>
                        <div className='services_global_items'>
                            <div className='services_global_items_service'>
                                <div className='services_global_items_service_item'>
                                    <img src={creatImg} alt="" />
                                </div>
                                <div className='services_global_items_service_item'>
                                    <h1>Creating website for your bussiness</h1>
                                    <p>I use technologies like:</p>
                                    <ul>
                                        <li><span>React.js & Redux</span></li>
                                        <li>HTML5 & CSS3</li>
                                        <li>JavaScript &<span> ES6+</span></li>
                                        <li><span>Tailwind </span>& Bootstrap</li>
                                        <li><span>TypeScript</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='services_global_items_service'>
                                <div className='services_global_items_service_item'>
                                    <img src={optimImg} alt="" />
                                </div>
                                <div className='services_global_items_service_item'>
                                    <h1>Optimazing existing websites</h1>
                                    <p>One year of training as a Front end developer, I have been trained on the most modern and fastest technologies and am ready to apply them in my projects </p>
                                </div>
                            </div>
                            <div className='services_global_items_service'>
                                <div className='services_global_items_service_item'>
                                    <img src={adapImg} alt="" />
                                </div>
                                <div className='services_global_items_service_item'>
                                    <h1>Adaptive & Crossbrowsering</h1>
                                    <p>At the moment, there are many different devices that could visit your site, and I will make it available to everyone.</p>
                                </div>
                            </div>
                            <div className='services_global_items_service'>
                                <div className='services_global_items_service_item'>
                                    <img src={seoImg} alt="" />
                                </div>
                                <div className='services_global_items_service_item'>
                                    <h1>SEO optimization</h1>
                                    <p>SEO - is Search Engine Optimization. This is a critical detail in business in today's competitive world, do you want your site to be in the upper places in the search?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesPage;