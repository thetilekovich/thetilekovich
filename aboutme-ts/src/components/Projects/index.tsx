import * as React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/Icons/vuesax-linear-vuesax-linear-arrow-right.svg'

const Projects: React.FC = () => {
    return (
        <section id='projects'>
            <div className='container'>
                <div className='projects m-auto py-6 px-6 rounded-lg'>
                    <header className='flex justify-between items-center'>
                        <h1 className='text-3xl font-bold mb-6'>My Portfolio</h1>
                        <div className='flex items-center'>
                            <Link className="mr-3" to='/projects'>See all</Link>
                            <img className='w-5' src={arrow} alt="" />
                        </div>
                    </header>
                    <div className='projects_items'>
                        <div className='projects_items_item mb-7'>
                            <iframe src="https://thetilekovich.github.io/weather" title='Weather app'></iframe>
                            <div className='ml-6'>
                                <h1 className='font-bold text-xl'>Weather app</h1>
                                <p className='text-gray-500'>Website</p>
                            </div>

                        </div>
                        <div className='projects_items_item'>
                            <iframe src="https://thetilekovich.github.io/twtm" title='Movie app'></iframe>
                            <div className='ml-6'>
                                <h1 className='font-bold text-xl'>Million Movies app</h1>
                                <p className='text-gray-500'>Website</p>
                            </div>
                        </div>
                        <div className='projects_items_item'>
                            <iframe src="https://thetilekovich.github.io/todo-app" title='todo app'></iframe>
                            <div className='ml-6'>
                                <h1 className='font-bold text-xl'>Todo app</h1>
                                <p className='text-gray-500'>Website</p>
                            </div>
                        </div>
                        <div className='projects_items_item'>
                            <iframe src="https://thetilekovich.github.io/iphone_calculator" title='todo app'></iframe>
                            <div className='ml-6'>
                                <h1 className='font-bold text-xl'>Calculator</h1>
                                <p className='text-gray-500'>Website</p>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;