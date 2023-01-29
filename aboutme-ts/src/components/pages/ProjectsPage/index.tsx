import * as React from 'react';
import './style.css'
import ProjectItem from '../../ProjectItem';
import { useSelector } from 'react-redux';
const ProjectsPage: React.FC = () => {
    const { language } = useSelector((s: { language: { language: string } }) => s.language)

    return (
        <section id='projectspage'>
            <div className='container'>
                <div className='projectspage'>
                    <h1 className='projectspage_title'>{language === 'ru' ? 'Проекты' : 'Projects'}</h1>
                    <div className='projects_global'>
                        <ProjectItem projectTitle='Weather app' iframe='https://thetilekovich.github.io/weather' code='https://github.com/thetilekovich/weather'>
                            <ul>
                                <li>React.js</li>
                                <li>Free API</li>
                                <li>Figma</li>
                            </ul>
                        </ProjectItem>
                        <ProjectItem projectTitle='Million movies and TV shows' iframe='https://thetilekovich.github.io/twtm' code='https://github.com/thetilekovich/twtm'>
                            <ul>
                                <li>React & Redux</li>
                                <li><span>themoviedb.com</span> - free database</li>
                                <li>Flex & Grid</li>
                                <li>React hooks</li>
                            </ul>
                        </ProjectItem>

                        <ProjectItem projectTitle='Personal website' iframe='https://thetilekovich.github.io/thetilekovich' code='https://github.com/thetilekovich/thetilekovich'>
                            <ul>
                                <li>React & Redux</li>
                                <li>TypeScript</li>
                                <li>Flex & Grid</li>
                                <li>React hooks</li>
                                <li>Tailwind</li>
                            </ul>
                        </ProjectItem>
                        <ProjectItem projectTitle='TODO APP' iframe='https://thetilekovich.github.io/todo-app' code='https://github.com/thetilekovich/todo-app'>
                            <ul>
                                <li>React & Redux</li>
                                <li> <span>MockAPI</span> - free API</li>
                            </ul>
                        </ProjectItem>
                        <ProjectItem projectTitle='Calculcator' iframe='https://thetilekovich.github.io/iphone_calculator' code='https://github.com/thetilekovich/iphone_calculator'>
                            <ul>
                                <li>HTML5 & CSS3</li>
                                <li>JavaScript & ES6+</li>
                            </ul>
                        </ProjectItem>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectsPage;